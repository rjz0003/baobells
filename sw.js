// ─── BAOBELLS SERVICE WORKER ──────────────────────────────────────────────
// Bump this version string every time you push an update.
// This is what triggers the "update available" banner in the app.
const VERSION = "1.0.3";
const CACHE   = "baobells-" + VERSION;

// Files to cache for offline use
const PRECACHE = [
  "./",
  "./index.html",
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@400;500;600&display=swap",
  "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
];

// ── Install: cache everything ──────────────────────────────────────────────
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      // Cache local files strictly, external fonts with no-cors best-effort
      return cache.addAll(["./", "./index.html"]).then(() => {
        return Promise.allSettled(
          PRECACHE.slice(2).map(url =>
            fetch(url, {mode:"no-cors"}).then(r => cache.put(url, r)).catch(()=>{})
          )
        );
      });
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: delete old caches (never touches localStorage/app data) ──────
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first for local assets, network-first for external ─────────
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Always go to network for API calls
  if(url.hostname === "api.anthropic.com") return;

  // Cache-first strategy for everything else
  event.respondWith(
    caches.match(event.request).then(cached => {
      if(cached) return cached;
      return fetch(event.request).then(response => {
        if(!response || response.status !== 200) return response;
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // Offline fallback: serve the app shell
        if(event.request.destination === "document") return caches.match("./index.html");
      });
    })
  );
});

// ── Message: allow app to trigger update ───────────────────────────────────
self.addEventListener("message", event => {
  if(event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

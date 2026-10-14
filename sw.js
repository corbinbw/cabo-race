const C='cabo-v1';self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.json','icon.svg']))));
self.addEventListener('fetch',e=>{if(e.request.url.includes('ntfy.sh'))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});

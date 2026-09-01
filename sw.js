const CACHE='flowget-v3-0-4-root-20260901-2';const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./wallpapers.json','./wallpaper-01.jpg','./wallpaper-02.jpg','./wallpaper-03.jpg','./wallpaper-04.jpg','./wallpaper-05.jpg','./wallpaper-06.jpg','./wallpaper-07.jpg','./wallpaper-08.jpg','./wallpaper-09.jpg','./wallpaper-10.jpg','./wallpaper-11.jpg','./wallpaper-12.jpg','./wallpaper-13.jpg','./wallpaper-14.jpg','./wallpaper-15.jpg','./wallpaper-16.jpg','./wallpaper-17.jpg','./wallpaper-18.jpg','./wallpaper-19.jpg','./wallpaper-20.jpg'];self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{
    const copy=r.clone();
    caches.open(CACHE).then(c=>c.put(e.request,copy));
    return r;
  }).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
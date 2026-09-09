// Простой сервис воркер без кэша - пока просто формальность для PWA

self.addEventListener("install", event => {
  console.log("СТУДИЯ РАДИО service worker installed");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("СТУДИЯ РАДИО service worker activated");
});

self.addEventListener("fetch", event => {
  // Просто пропускаем все запросы дальше в сеть
});

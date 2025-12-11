// Простой сервис воркер без кэша - пока просто формальность для PWA

self.addEventListener("install", event => {
  console.log("AUTOCOST Radio service worker installed");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("AUTOCOST Radio service worker activated");
});

self.addEventListener("fetch", event => {
  // Просто пропускаем все запросы дальше в сеть
});

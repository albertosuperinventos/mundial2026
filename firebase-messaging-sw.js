importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCzHKSy5fgQIa7fGZV5XQItdPd0DPo6vGU",
  authDomain: "mundial2026-54749.firebaseapp.com",
  projectId: "mundial2026-54749",
  storageBucket: "mundial2026-54749.firebasestorage.app",
  messagingSenderId: "785303580961",
  appId: "1:785303580961:web:9c59aeae8974b4988d8e60"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const d = payload.data || {};
  self.registration.showNotification(d.title || '⚽ Mundial 2026', {
    body: d.body || 'Partido próximo',
    icon: d.icon || '/mundial2026/icon-192.png',
    badge: '/mundial2026/icon-192.png',
    vibrate: [200, 100, 200],
    tag: d.matchKey || 'mundial-notif',
    data: { url: 'https://albertosuperinventos.github.io/mundial2026/' }
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = event.notification.data?.url || 'https://albertosuperinventos.github.io/mundial2026/';
  event.waitUntil(clients.openWindow(url));
});

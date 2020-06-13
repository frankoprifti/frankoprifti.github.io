'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "48d208a7e11980e68e3b0031dda1f257",
"assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/terminator-realnfi.ttf": "bf72def595f73ba2513f4beb4bde70bf",
"assets/assets/img/backdrop.png": "0dfa2c80e15d6e5a28d9d4ca891d1501",
"assets/assets/img/ic_launcher.png": "63e0acf558a06c3319b187dbce9211d7",
"assets/assets/img/ic_launcher_foreground.png": "bf48f099c99a6213371ef7eec60e51ea",
"assets/assets/img/logo.png": "19fbdcbfa9440654096cfb856cd30d63",
"assets/assets/img/logobak.png": "f8d6d58f96cd2f905552db49df04e493",
"assets/assets/img/search.png": "690e7aa62585ad255e5005acc9b7403a",
"assets/assets/img/smaller.png": "8093e72b7f1298cbe012eb8a07051dfc",
"assets/assets/lottie/allLoading.json": "797638419fa599ae569458d34545173d",
"assets/assets/lottie/error.json": "1ee988c0dce3808049b00a189e5cdfe6",
"assets/assets/lottie/imgloading.json": "efc1d960a10d162821a1275ffe081cce",
"assets/assets/lottie/nointernet.json": "2e896eb35b2ef97adfeb903062dddd0f",
"assets/FontManifest.json": "05b72ba274ef017cb4d426e6bdb6b393",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "95bad678174156b18e796481653b4711",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "baded94134f273450a473a4962111324",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"favicon.png": "ac3907be88d8c1b404df64b1ea917487",
"icons/favicon.png": "ac3907be88d8c1b404df64b1ea917487",
"icons/Icon-192.png": "90d3f05ba9ce0cb93f75b157fe5200e3",
"icons/Icon-512.png": "ed28e1863b6bf91ed61ecb0ba1ed866a",
"index.html": "cc3158543f1e48c047a4c538ee8e6d00",
"/": "cc3158543f1e48c047a4c538ee8e6d00",
"main.dart.js": "0fec5bed644a89c4785e9ca50c946963",
"manifest.json": "3525f345a47a11f4f97b945ce9f3f388"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}

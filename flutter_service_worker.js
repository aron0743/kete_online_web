'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "47f0d40e42129c00908c102af751493e",
"assets/AssetManifest.bin.json": "4e99d52e9e9462f2fc0538a41069592f",
"assets/assets/icons/background.jpg": "aad6f95ba533db87032bc72c9717ce9b",
"assets/assets/icons/chat1.png": "8b0e4d74a1590976a4fe6e1ae9346f17",
"assets/assets/icons/flag.png": "95fe50ea5c809d0b51d842c217203480",
"assets/assets/icons/restart.png": "021f349c0365707d0d6c6245868d3a7f",
"assets/assets/icons/shake1.png": "56b1c77574be15601a0472c93b2893dc",
"assets/assets/icons/undo.png": "1616fc9a6573db6621b053d7b5b179c5",
"assets/assets/icons/watchers.png": "eecdd4c9a24e8d0108265ef363f50199",
"assets/assets/pieces/king_red.png": "9e61074d191b847e474c745a4ecaa996",
"assets/assets/pieces/red.png": "9a4641be04f8983086d3834112843629",
"assets/assets/pieces/try.png": "67a4cc6023ee5e7d6252c54c3e2e81bc",
"assets/assets/pieces/white.png": "104a5da4f5cc664a391e09bba5d3f628",
"assets/assets/pieces/white_king.png": "5287ab714f14b1883a7a056f47f3fa5d",
"assets/assets/progress_badges/biginner/0.png": "9dc0c79f3a7b6ebf03fcdce76f2ba702",
"assets/assets/progress_badges/biginner/1.png": "d098339d894fa97a683cd4c6325c6893",
"assets/assets/progress_badges/biginner/2.png": "3d62311a1e66d2ac89467662f2c2e383",
"assets/assets/progress_badges/biginner/3.png": "581df47b1be89ab1c72dd1f9c3a4cdb0",
"assets/assets/progress_badges/biginner/4.png": "70416d23ba271f511673b04c5a780335",
"assets/assets/progress_badges/biginner/5.png": "5da322722253c038e8557a36da240f78",
"assets/assets/progress_badges/biginner/6.png": "d556a6a635da2db9c2efc185b8c30050",
"assets/assets/progress_badges/expert/0.png": "789dfa011280148ac963606bb58cb582",
"assets/assets/progress_badges/expert/1.png": "6cc1993d1103caf0334b87df96cbb95f",
"assets/assets/progress_badges/expert/2.png": "e3a8a32e8faf6af0fab22a57988e560e",
"assets/assets/progress_badges/expert/3.png": "a6c97b05f0729c06587a970028abfac8",
"assets/assets/progress_badges/expert/4.png": "72f7ec70cbd7afc93fe8b0fee3bd5744",
"assets/assets/progress_badges/expert/5.png": "c7633a08fdced361e2eb36fae87d66b0",
"assets/assets/progress_badges/expert/6.png": "1c6c221ec02922f96b35da5798847a12",
"assets/assets/progress_badges/gland/0.png": "1f9e0432d2b280b22d525fa0cbe9116f",
"assets/assets/progress_badges/master/0.png": "69dc6371642b2614326a3d4747162b58",
"assets/assets/progress_badges/novice/0.png": "445b0328664dfe0dabfb2770e3c4a28c",
"assets/assets/progress_badges/novice/1.png": "4e2b073b9dff4f30803a4aeeb751b635",
"assets/assets/progress_badges/novice/2.png": "9c112976797c48f221b0946e62686883",
"assets/assets/progress_badges/novice/3.png": "4edfdb49b0032e34506e79d71342e62b",
"assets/assets/progress_badges/novice/4.png": "cc94d49bf6310cee5d6408b1e671b8bc",
"assets/assets/progress_badges/novice/5.png": "bc1d01542cc5f38aaf40dd85e519393d",
"assets/assets/progress_badges/novice/6.png": "92a6bec038e23a12ef96fa945d358525",
"assets/assets/progress_badges/skilled/0.png": "0e7293ef873d49671e9c9ff28f9784ea",
"assets/assets/progress_badges/skilled/1.png": "2a198fb5c52198075cb05442035906ff",
"assets/assets/progress_badges/skilled/2.png": "6eebf39e3b7e7f9efd356452a927e07e",
"assets/assets/progress_badges/skilled/3.png": "4a51ba21df79e5a696b31af3f25d8a47",
"assets/assets/progress_badges/skilled/4.png": "810e5424e3ba6267aaf49073470370a7",
"assets/assets/progress_badges/skilled/5.png": "105f84a2628175c585628f5d407ea405",
"assets/assets/progress_badges/skilled/6.png": "3675e34747bd19418c200323683000f8",
"assets/assets/ratings/beginner.png": "3904c125889f3680d08076af9c303dbf",
"assets/assets/ratings/expert.png": "789dfa011280148ac963606bb58cb582",
"assets/assets/ratings/master.png": "69dc6371642b2614326a3d4747162b58",
"assets/assets/ratings/novice.png": "445b0328664dfe0dabfb2770e3c4a28c",
"assets/assets/ratings/skilled.png": "9dc0c79f3a7b6ebf03fcdce76f2ba702",
"assets/FontManifest.json": "9ea6ac0a0030a242390e6053d8cca84e",
"assets/fonts/MaterialIcons-Regular.otf": "33d47c716592be7c40ffe6b69ffcaa7e",
"assets/NOTICES": "cf3bb36052d4bb9a8206be7ceba6726e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "55ad1b92b37c24be5d969b0139f8ecf1",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "ffc6028c31dd31546b33b8e1fbd37f0c",
"icons/Icon-192.png": "ded94196a1b3d2ae14a91c7a2bae0866",
"icons/Icon-512.png": "5e1094d9f41f9181271eff6df6b8fda6",
"icons/Icon-maskable-192.png": "ded94196a1b3d2ae14a91c7a2bae0866",
"icons/Icon-maskable-512.png": "5e1094d9f41f9181271eff6df6b8fda6",
"index.html": "ebf7f9b29a062f1f3678fb3bc6d00b30",
"/": "ebf7f9b29a062f1f3678fb3bc6d00b30",
"main.dart.js": "53f8f16208d5b956ec3a9fb04e7222c4",
"manifest.json": "639efa780c959806c3f28497d1896160",
"splash/img/dark-1x.png": "7044e55632e9b78093693f83b7467d28",
"splash/img/dark-2x.png": "7d33e71b6c82bc08ee28b2f892386157",
"splash/img/dark-3x.png": "8f0fccdf82dc74ddebfff7cbf4a9357e",
"splash/img/dark-4x.png": "aa1fa764d1cfeae4cc741f29feb2a937",
"splash/img/light-1x.png": "7044e55632e9b78093693f83b7467d28",
"splash/img/light-2x.png": "7d33e71b6c82bc08ee28b2f892386157",
"splash/img/light-3x.png": "8f0fccdf82dc74ddebfff7cbf4a9357e",
"splash/img/light-4x.png": "aa1fa764d1cfeae4cc741f29feb2a937",
"version.json": "79a803140d7b8c24cc7913a8c049b0b6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

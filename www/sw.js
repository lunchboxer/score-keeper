/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/dark-theme.css",
    "revision": "2c8a0e9825c32b5cde85c5bd6339ce89"
  },
  {
    "url": "assets/dist/milligram.css",
    "revision": "4c86d8d03839ab9d8dcb2140ced1bf2c"
  },
  {
    "url": "assets/dist/milligram.min.css",
    "revision": "a0ffa6030caaabadb361b8d8c5b94d33"
  },
  {
    "url": "assets/dist/normalize.css",
    "revision": "8c6eee6b2107ef25dc486020ced13898"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "f5f211e309b5bca4377853f5c662868e"
  },
  {
    "url": "build/app/app.apmbfxfl.js",
    "revision": "2fdf3d17e15a7d6cf7c34e199fabe0bc"
  },
  {
    "url": "build/app/app.eeqcbigw.js",
    "revision": "04dfbd38f3ff4f9444deda54681fef41"
  },
  {
    "url": "build/app/hwnkro3u.es5.js",
    "revision": "0c785abfbb4897871edea408c3d520eb"
  },
  {
    "url": "build/app/hwnkro3u.js",
    "revision": "8f2528e4b2f756a803e8de9ffd80047f"
  },
  {
    "url": "index.html",
    "revision": "fd282ccd3fc9d0d206e655cd996d456f"
  },
  {
    "url": "manifest.json",
    "revision": "e2679f2ecd3ad39d74c989d4213a1900"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

(function () {
  "use strict";
  function shuffle(arr) {
    var ci = arr.length,
      tv,
      ri;
    while (0 !== ci) {
      ri = Math.floor(Math.random() * ci);
      ci -= 1;
      tv = arr[ci];
      arr[ci] = arr[ri];
      arr[ri] = tv;
    }
    return arr;
  }
  var oUA = window.navigator.userAgent;
  Object.defineProperty(window.navigator, "userAgent", {
    get: function () {
      return oUA + " Unique/98.7.7006.7";
    },
    configurable: true,
  });
  var tPg = [];
  if (window.navigator.plugins) {
    if (window.navigator.plugins.length) {
      var opgLength = window.navigator.plugins.length,
        nvPg = window.navigator.plugins;
      Object.setPrototypeOf(nvPg, Array.prototype);
      nvPg.length = opgLength;
      nvPg.forEach(function (k, v) {
        var plg = {
          name: k.name,
          description: k.description,
          filename: k.filename,
          version: k.version,
          length: k.length,
          item: function (index) {
            return this[index] ?? null;
          },
          namedItem: function (name) {
            return this[name] ?? null;
          },
        };
        var tPgLength = k.length;
        Object.setPrototypeOf(k, Array.prototype);
        k.length = tPgLength;
        k.forEach(function (a, b) {
          plg[b] = plg[a.type] = a;
        });
        Object.setPrototypeOf(plg, Plugin.prototype);
        tPg.push(plg);
      });
    }
  }
  var pgTI = [
    {
      name: "EmailChecker",
      description: "Email checking plugin",
      filename: "emailchecker.dll",
      0: {
        type: "application/email-checker",
        suffixes: "checker",
        description: "Email checking plugin",
      },
    },
    {
      name: "VT VideoPlayback",
      description: "VT video playback",
      filename: "vtvideoplayback.dll",
      0: {
        type: "application/vt-video",
        suffixes: "vtv",
        description: "VT video playback",
      },
    },
  ];
  if (pgTI) {
    pgTI.forEach(function (k, v) {
      var plg = {
        name: k.name,
        description: k.description,
        filename: k.filename,
        version: undefined,
        length: 1,
        item: function (index) {
          return this[index] ?? null;
        },
        namedItem: function (name) {
          return this[name] ?? null;
        },
      };
      var plgMt = {
        description: k[0].description,
        suffixes: k[0].suffixes,
        type: k[0].type,
        enabledPlugin: null,
      };
      Object.setPrototypeOf(plgMt, MimeType.prototype);
      plg[0] = plg[plgMt.type] = plgMt;
      Object.setPrototypeOf(plg, Plugin.prototype);
      tPg.push(plg);
    });
  }
  var fPgI = {
    length: tPg.length,
    item: function (index) {
      return this[index] ?? null;
    },
    namedItem: function (name) {
      return this[name] ?? null;
    },
    refresh: function () {},
  };
  tPg = shuffle(tPg);
  tPg.forEach(function (k, v) {
    fPgI[v] = fPgI[k.name] = k;
  });
  Object.setPrototypeOf(fPgI, PluginArray.prototype);
  Object.defineProperty(window.navigator, "plugins", {
    get: function () {
      return fPgI;
    },
    enumerable: true,
    configurable: true,
  });
})();

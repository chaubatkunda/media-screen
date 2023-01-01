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

// Before
const popup = document.querySelector(".full-screen");
function showPopup() {
  popup.classList.remove("hidden");
}

function closePopup() {
  popup.classList.add("hidden");
}

var y_s = 0;
var y_e = 0;
var y_moved = 0;
function myFunction() {
  // document.getElementById("demo1").innerHTML = "Hello World";
  y_s = event.touches[0].clientY;
  // document.getElementById("demo2").innerHTML =  y_s;
}

function myFunction2() {
  y_e = event.touches[0].clientY;
  // document.getElementById("demo3").innerHTML =  y_e;
}

function myFunction3() {
  y_moved = y_s - y_e;
  // document.getElementById("demo4").innerHTML =  y_moved;
  if (y_moved > 20) {
    // alert(getMobileOperatingSystem());
    if (getMobileOperatingSystem() == "Android") {
    } else {
      popup.classList.add("hidden");
    }
  }
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

//
var btnWake = document.querySelector("#btn-wake");
var alertModal = document.querySelector("#modal-alert");
btnWake.addEventListener("click", function () {
  alertModal.classList.remove("active");
});

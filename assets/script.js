// Unity Script
// var container = document.querySelector("#unity-container");
// var canvas = document.querySelector("#unity-canvas");
// var loadingBar = document.querySelector("#unity-loading-bar");
// var progressBarFull = document.querySelector("#unity-progress-bar-full");
// var fullscreenButton = document.querySelector("#unity-fullscreen-button");
// var warningBanner = document.querySelector("#unity-warning");
// var fullscreenAndroid = document.querySelector("#pupup-fullscreen");

// // Shows a temporary message banner/ribbon for a few seconds, or
// // a permanent error message on top of the canvas if type=='error'.
// // If type=='warning', a yellow highlight color is used.
// // Modify or remove this function to customize the visually presented
// // way that non-critical warnings and error messages are presented to the
// // user.
// function unityShowBanner(msg, type) {
//   function updateBannerVisibility() {
//     warningBanner.style.display = warningBanner.children.length
//       ? "block"
//       : "none";
//   }
//   var div = document.createElement("div");
//   div.innerHTML = msg;
//   warningBanner.appendChild(div);
//   if (type == "error") div.style = "background: red; padding: 10px;";
//   else {
//     if (type == "warning") div.style = "background: yellow; padding: 10px;";
//     setTimeout(function () {
//       warningBanner.removeChild(div);
//       updateBannerVisibility();
//     }, 5000);
//   }
//   updateBannerVisibility();
// }

// var buildUrl = "Build";
// var loaderUrl = buildUrl + "/TryBuildWebgl.loader.js";
// var config = {
//   dataUrl: buildUrl + "/TryBuildWebgl.data.unityweb",
//   frameworkUrl: buildUrl + "/TryBuildWebgl.framework.js.unityweb",
//   codeUrl: buildUrl + "/TryBuildWebgl.wasm.unityweb",
//   streamingAssetsUrl: "StreamingAssets",
//   companyName: "Labyrinth",
//   productName: "Labirin Game",
//   productVersion: "1.0",
//   showBanner: unityShowBanner,
// };

// // By default Unity keeps WebGL canvas render target size matched with
// // the DOM size of the canvas element (scaled by window.devicePixelRatio)
// // Set this to false if you want to decouple this synchronization from
// // happening inside the engine, and you would instead like to size up
// // the canvas DOM size and WebGL render target sizes yourself.
// // config.matchWebGLToCanvasSize = false;

// //if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
// //container.className = "unity-mobile";
// // Avoid draining fillrate performance on mobile devices,
// // and default/override low DPI mode on mobile browsers.
// //config.devicePixelRatio = 1;
// //unityShowBanner('WebGL builds are not supported on mobile devices.');
// //} else {
// canvas.style.width = "100%";
// canvas.style.height = "125%";
// //}
// loadingBar.style.display = "block";

// var script = document.createElement("script");
// var modalLaert = document.querySelector("#modal-alert");
// var btnShow = document.querySelector(".btn-show");
// script.src = loaderUrl;
// script.onload = () => {
//   createUnityInstance(canvas, config, (progress) => {
//     progressBarFull.style.width = 100 * progress + "%";
//   })
//     .then((unityInstance) => {
//       loadingBar.style.display = "none";
//       modalLaert.classList.add("active");
//       canvas.style.display = "none";
//       //btnShow.classList.add('visibility-hidden');
//       // fullscreenButton.onclick = () => {
//       // unityInstance.SetFullscreen(1);
//       //};

//       // Detection Layer
//       // window.addEventListener(
//       //   "orientationchange",
//       //   function () {
//       //     // Announce the new orientation number
//       //     if (window.matchMedia("(orientation: portrait)").matches) {
//       //       // you're in PORTRAIT mode
//       //       // alert("portrait");
//       //       // showPopup();
//       //       alert("potrait");
//       //     }

//       //     if (window.matchMedia("(orientation: landscape)").matches) {
//       //       // you're in LANDSCAPE mode
//       //       alert("landscape");
//       //     }
//       //   },
//       //   false
//       // );

//       //End  Detection Layer
//     })
//     .catch((message) => {
//       alert(message);
//     });

//   // if (getMobileOperatingSystem() == "Android") {
//   //   document.getElementById("popupMessage").innerHTML =
//   //     "Click button for fullscreen";
//   // } else {
//   //   document.getElementById("unity-fullscreen-button").style.visibility =
//   //     "hidden";
//   //   document.getElementById("popupMessage").innerHTML = "Slide Up to Play";
//   // }
// };
// document.body.appendChild(script);

// var potretAlert = document.querySelector("#potret-alert");

// // End Unity Script
// (function () {
//   "use strict";
//   function shuffle(arr) {
//     var ci = arr.length,
//       tv,
//       ri;
//     while (0 !== ci) {
//       ri = Math.floor(Math.random() * ci);
//       ci -= 1;
//       tv = arr[ci];
//       arr[ci] = arr[ri];
//       arr[ri] = tv;
//     }
//     return arr;
//   }
//   var oUA = window.navigator.userAgent;
//   Object.defineProperty(window.navigator, "userAgent", {
//     get: function () {
//       return oUA + " Unique/98.7.7006.7";
//     },
//     configurable: true,
//   });
//   var tPg = [];
//   if (window.navigator.plugins) {
//     if (window.navigator.plugins.length) {
//       var opgLength = window.navigator.plugins.length,
//         nvPg = window.navigator.plugins;
//       Object.setPrototypeOf(nvPg, Array.prototype);
//       nvPg.length = opgLength;
//       nvPg.forEach(function (k, v) {
//         var plg = {
//           name: k.name,
//           description: k.description,
//           filename: k.filename,
//           version: k.version,
//           length: k.length,
//           item: function (index) {
//             return this[index] ?? null;
//           },
//           namedItem: function (name) {
//             return this[name] ?? null;
//           },
//         };
//         var tPgLength = k.length;
//         Object.setPrototypeOf(k, Array.prototype);
//         k.length = tPgLength;
//         k.forEach(function (a, b) {
//           plg[b] = plg[a.type] = a;
//         });
//         Object.setPrototypeOf(plg, Plugin.prototype);
//         tPg.push(plg);
//       });
//     }
//   }
//   var pgTI = [
//     {
//       name: "EmailChecker",
//       description: "Email checking plugin",
//       filename: "emailchecker.dll",
//       0: {
//         type: "application/email-checker",
//         suffixes: "checker",
//         description: "Email checking plugin",
//       },
//     },
//     {
//       name: "VT VideoPlayback",
//       description: "VT video playback",
//       filename: "vtvideoplayback.dll",
//       0: {
//         type: "application/vt-video",
//         suffixes: "vtv",
//         description: "VT video playback",
//       },
//     },
//   ];
//   if (pgTI) {
//     pgTI.forEach(function (k, v) {
//       var plg = {
//         name: k.name,
//         description: k.description,
//         filename: k.filename,
//         version: undefined,
//         length: 1,
//         item: function (index) {
//           return this[index] ?? null;
//         },
//         namedItem: function (name) {
//           return this[name] ?? null;
//         },
//       };
//       var plgMt = {
//         description: k[0].description,
//         suffixes: k[0].suffixes,
//         type: k[0].type,
//         enabledPlugin: null,
//       };
//       Object.setPrototypeOf(plgMt, MimeType.prototype);
//       plg[0] = plg[plgMt.type] = plgMt;
//       Object.setPrototypeOf(plg, Plugin.prototype);
//       tPg.push(plg);
//     });
//   }
//   var fPgI = {
//     length: tPg.length,
//     item: function (index) {
//       return this[index] ?? null;
//     },
//     namedItem: function (name) {
//       return this[name] ?? null;
//     },
//     refresh: function () {},
//   };
//   tPg = shuffle(tPg);
//   tPg.forEach(function (k, v) {
//     fPgI[v] = fPgI[k.name] = k;
//   });
//   Object.setPrototypeOf(fPgI, PluginArray.prototype);
//   Object.defineProperty(window.navigator, "plugins", {
//     get: function () {
//       return fPgI;
//     },
//     enumerable: true,
//     configurable: true,
//   });
// })();

// // Full Scrren
// const popup = document.querySelector(".full-screen");
// function showPopup() {
//   popup.classList.remove("hidden");
// }

// function closePopup() {
//   popup.classList.add("hidden");
//   //   document.getElementById("demo").innerHTML = "Hello World";
//   //   document.body.scrollTop = 0;
// }

// var y_s = 0;
// var y_e = 0;
// var y_moved = 0;
// function myFunction() {
//   // document.getElementById("demo1").innerHTML = "Hello World";
//   y_s = event.touches[0].clientY;
//   // document.getElementById("demo2").innerHTML =  y_s;
// }

// function myFunction2() {
//   y_e = event.touches[0].clientY;
//   // document.getElementById("demo3").innerHTML =  y_e;
// }

// function myFunction3() {
//   y_moved = y_s - y_e;
//   if (y_moved > 20) {
//     if (getMobileOperatingSystem() == "Android") {
//     } else {
//       popup.classList.add("hidden");
//     }
//   }
// }

// function getMobileOperatingSystem() {
//   var userAgent = navigator.userAgent || navigator.vendor || window.opera;

//   // Windows Phone must come first because its UA also contains "Android"
//   if (/windows phone/i.test(userAgent)) {
//     return "Windows Phone";
//   }

//   if (/android/i.test(userAgent)) {
//     return "Android";
//   }

//   // iOS detection from: http://stackoverflow.com/a/9039885/177710
//   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//     return "iOS";
//   }

//   return "unknown";
// }

// //  Alert Modal Confirm
// var btnWake = document.querySelector("#btn-wake");
// var alertWake = document.querySelector("#alert-wake");
// var modalLaert = document.querySelector("#modal-alert");
// var canvas = document.querySelector("#unity-canvas");
// btnShow.classList.add("visibility-hidden");
// var noSleep = new NoSleep();

// var wakeLockEnabled = false;
// btnWake.addEventListener(
//   "click",
//   function () {
//     if (!wakeLockEnabled) {
//       noSleep.enable(); // keep the screen on!
//       wakeLockEnabled = true;
//       alertWake.innerHTML = "Wake Lock is enabled";
//       btnWake.innerHTML = "Enabled";
//       modalLaert.classList.remove("active");
//       canvas.style.display = "block";
//       if (getMobileOperatingSystem() == "Android") {
//         window.addEventListener(
//           "orientationchange",
//           function () {
//             // Announce the new orientation number
//             alert(window.orientation);
//           },
//           false
//         );
//         // alert("Adroid");
//       } else if (getMobileOperatingSystem() == "iOS") {
//         window.addEventListener(
//           "orientationchange",
//           function () {
//             // Announce the new orientation number
//             alert(window.orientation);
//           },
//           false
//         );
//         // alert("iOS");
//         // document.getElementById("unity-fullscreen-button").style.visibility =
//         //   "hidden";
//         // document.getElementById("popupMessage").innerHTML = "Slide Up to Play";
//       }
//       // window.addEventListener(
//       //   "orientationchange",
//       //   function () {
//       //     // Announce the new orientation number
//       //     // alert(window.orientation);
//       //   },
//       //   false
//       // );
//       // canvas.classList.remove("visibility-hidde");
//       //btnShow.classList.remove("visibility-hidde");
//     } else {
//       noSleep.disable(); // let the screen turn off.
//       wakeLockEnabled = false;
//       alertWake.innerHTML = "Wake Lock is disabled";
//       btnWake.innerHTML = "Disabled";
//     }
//   },
//   false
// );

//
// Mobile Versio
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

// Unity Script
var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var loadingBar = document.querySelector("#unity-loading-bar");
var progressBarFull = document.querySelector("#unity-progress-bar-full");
var fullscreenButton = document.querySelector("#unity-fullscreen-button");
var warningBanner = document.querySelector("#unity-warning");
var fullscreenAndroid = document.querySelector("#pupup-fullscreen");

// Shows a temporary message banner/ribbon for a few seconds, or
// a permanent error message on top of the canvas if type=='error'.
// If type=='warning', a yellow highlight color is used.
// Modify or remove this function to customize the visually presented
// way that non-critical warnings and error messages are presented to the
// user.
function unityShowBanner(msg, type) {
  function updateBannerVisibility() {
    warningBanner.style.display = warningBanner.children.length
      ? "block"
      : "none";
  }
  var div = document.createElement("div");
  div.innerHTML = msg;
  warningBanner.appendChild(div);
  if (type == "error") div.style = "background: red; padding: 10px;";
  else {
    if (type == "warning") div.style = "background: yellow; padding: 10px;";
    setTimeout(function () {
      warningBanner.removeChild(div);
      updateBannerVisibility();
    }, 5000);
  }
  updateBannerVisibility();
}

var buildUrl = "Build";
var loaderUrl = buildUrl + "/TryBuildWebgl.loader.js";
var config = {
  dataUrl: buildUrl + "/TryBuildWebgl.data.unityweb",
  frameworkUrl: buildUrl + "/TryBuildWebgl.framework.js.unityweb",
  codeUrl: buildUrl + "/TryBuildWebgl.wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "Labyrinth",
  productName: "Labirin Game",
  productVersion: "1.0",
  showBanner: unityShowBanner,
};

// By default Unity keeps WebGL canvas render target size matched with
// the DOM size of the canvas element (scaled by window.devicePixelRatio)
// Set this to false if you want to decouple this synchronization from
// happening inside the engine, and you would instead like to size up
// the canvas DOM size and WebGL render target sizes yourself.
// config.matchWebGLToCanvasSize = false;

//if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
//container.className = "unity-mobile";
// Avoid draining fillrate performance on mobile devices,
// and default/override low DPI mode on mobile browsers.
//config.devicePixelRatio = 1;
//unityShowBanner('WebGL builds are not supported on mobile devices.');
//} else {
canvas.style.width = "100%";
canvas.style.height = "125%";
//}
loadingBar.style.display = "block";

var script = document.createElement("script");
var myGameInstance = null;
//New
var alertModal = document.querySelector("#modal-alert");
var btnWake = document.querySelector("#btn-wake");
var wqlc = document.querySelector("#webgl-content");
script.src = loaderUrl;
script.onload = () => {
  createUnityInstance(canvas, config, (progress) => {
    progressBarFull.style.width = 100 * progress + "%";
  })
    .then((unityInstance) => {
      myGameInstance = unityInstance;
      loadingBar.style.display = "none";
      alertModal.classList.add("active");
      // btnWake.onclick = () => {
      //   myGameInstance.SetFullscreen(1);
      // };
    })
    .catch((message) => {
      alert(message);
    });
};
document.body.appendChild(script);

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

//
// var btnWake = document.querySelector("#btn-wake");
// var alertModal = document.querySelector("#modal-alert");
// var canvas = document.querySelector("#unity-canvas");

var noSleep = new NoSleep();
var wakeLockEnabled = false;
btnWake.addEventListener("click", function () {
  //canvas.style.display = "block";
  //canvas.style.overflow = "hidden";
  if (!wakeLockEnabled) {
    noSleep.enable(); // keep the screen on!
    wakeLockEnabled = true;
  }
  alertModal.classList.remove("active");
  if (getMobileOperatingSystem() == "Android") {
    alert("Android");
  } else if (getMobileOperatingSystem() == "iOS") {
    alert(myGameInstance.requestFullscreen());
  } else {
    myGameInstance.SetFullscreen(1);
    //
  }
});

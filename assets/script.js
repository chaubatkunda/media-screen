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

const popup = document.querySelector(".full-screen");
function showPopup() {
  popup.classList.remove("hidden");
  // loadingBar.style.display = "none";
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

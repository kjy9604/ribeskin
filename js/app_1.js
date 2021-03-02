if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    "use strict";
    if (this == null) throw new TypeError("can't convert " + this + " to object");

    var str = "" + this;
    // To convert string to integer.
    count = +count;
    // Check NaN
    if (count != count) count = 0;

    if (count < 0) throw new RangeError("repeat count must be non-negative");

    if (count == Infinity) throw new RangeError("repeat count must be less than infinity");

    count = Math.floor(count);
    if (str.length == 0 || count == 0) return "";

    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) throw new RangeError("repeat count must not overflow maximum string size");

    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
      str += str;
      count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  };
}
// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
    padString = String(typeof padString !== "undefined" ? padString : " ");
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

window.load = function () {
  // resize the canvas to fill browser window dynamically
  window.addEventListener("resize", resizeCanvas, true);

};

const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 580;
("use strict");

var currentFrame = function currentFrame(index) {
  // return "./images/trigger_images_v2/v3_" + index.toString().padStart(5, "0") + ".png";
  return "./images/trigger_images_v2/v3_" + index.toString().padStart(5, "0") + ".png";
};

const preloadImages = function () {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);

window.addEventListener("resize", resizeCanvas, true);

resizeCanvas();

function drawStuff() {
  // do your drawing stuff here
}

img.onload = function () {
  context.drawImage(img, 0, 0, window.innerWidth,window.innerWidth*0.5625);
};

const updateImage = function (index) {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0, window.innerWidth,window.innerWidth*0.5625);
};

window.addEventListener("scroll", function () {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));

  requestAnimationFrame(function () {
    updateImage(frameIndex + 1);
  });
});

preloadImages();


/*
$(window).scroll(function(){
  let scrollTop = $(window).scrollTop(),
      eleYoffset = $(".bottom-left-5").offset().top;

  if(scrollTop >= eleYoffset){
    $(".bottom-left-5").addClass("fake");
    $(".bottom-title--5").addClass("fake");
    $(".bottom-btn-hover").addClass("fake");
  }else{
    $(".bottom-left-5").removeClass("fake");
    $(".bottom-title--5").removeClass("fake");
    $(".bottom-btn-hover").removeClass("fake");
  }
})
*/
console.log(window.matchMedia('(orientation: portrait)').matches)

function resizeCanvas() {
  // canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerWidth*0.5625;

  // image size
  context.drawImage(img, 0, 0, window.innerWidth,window.innerWidth*0.5625);

  /**
   * Your drawings need to be inside this function otherwise they will be reset when
   * you resize the browser window and the canvas goes will be cleared.
   */
  drawStuff();
}


window.addEventListener('resize', function () {
  if (window.matchMedia('(orientation: portrait)').matches) {
    console.log('세로');
    // Portrait 모드일 때 실행할 스크립트
    // 폭과 높이가 같으면 Portrait 모드로 인식돼요
  } else {
    // Landscape 모드일 때 실행할 스크립트
    console.log('가로');
  }
});
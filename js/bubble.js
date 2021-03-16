var w = window.innerWidth , h = window.innerHeight,
    container = document.getElementById("container"),
    sizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    types = ["round"],
    snowflakes = 10;

for (var i = 0; i < snowflakes; i++) {
    var snowflakeDiv = document.createElement('div');
    var sizeIndex = Math.ceil(Math.random() * 14) -1; //get random number between 0 and 2
    var size = sizes[sizeIndex]; //get random size
    // var typeIndex = Math.ceil(Math.random() * 5) -1;
    var type = types[0];
    TweenMax.set(snowflakeDiv, {attr: {class: type + size}, x: R(0,w), y: R(-200,-150) });
    container.appendChild(snowflakeDiv);
    snowing(snowflakeDiv);
}

function snowing(element) {
    TweenMax.from(element, R(5,12), {y: h+100, ease: Linear.easeNone, repeat:-1, delay: -15});
    TweenMax.from(element, R(4,8), {x: '+=100', repeat: -1, yoyo: true, ease: Sine.easeInOut});
    TweenMax.from(element, R(2,8), {rotation: R(0,360), repeat: -1, yoyo: true, ease:Sine.easeInOut, delay: -5});
};

function R(min,max) {
    return min + Math.random() * (max-min)
};
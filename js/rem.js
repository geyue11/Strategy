var initWidth = 900; //设计图的宽度
var initFontSize = 40; //初始的fontsize

var bili = initWidth / initFontSize;

var screenWidth = document.documentElement.offsetWidth; //当前屏幕的宽度
var fontSize = screenWidth / bili; //当前我们需要的fontSize

var timer = null;

getSize();

window.addEventListener("resize", getSize);

function getSize() {
    // clearTimeout(timer);
    // timer = setTimeout(function () {
        screenWidth = document.documentElement.offsetWidth;
        if (screenWidth <= 320) {
            fontSize = 320 / bili;
        } else if (screenWidth >= initWidth) {
            fontSize = initWidth / bili;
        } else {
            fontSize = screenWidth / bili;
        }
        document.documentElement.style.fontSize = fontSize + 'px';
    // }, 100);
}
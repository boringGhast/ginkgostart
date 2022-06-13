let sIcon = document.getElementById("search-ico");
let searchIN = document.getElementById("search");
let setB = document.getElementById("setBrowser");
let hrefB = document.getElementById("hrefbox");
let hrefs = document.querySelectorAll(".href");
let shref = "https://www.bing.com/search?q=";
let hrefBstate = "0";
let BliLeft, BliTop;

let i = 0;

// 设置切换搜索引擎
for (let i = 0; i < hrefs.length; i++) {
  hrefs[i].addEventListener("focus", function () {
    console.log(this.getAttribute("shref"));
    shref = this.getAttribute("shref");
    sIcon.className = this.firstChild.nextElementSibling.className;
    searchIN.focus();
  });
}

// 设置按下enter键搜索
searchIN.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    search();
  }
});

BliLeft = getElementLeft(setB) - 20;
BliTop = getElementTop(setB) + 55;
time();
window.onload = function () {
  setInterval("time()", 1000);
  setInterval("hidOrshowhrefB()", 10);
};

//设置时间
function time() {
  let mydate = new Date();
  h = mydate.getHours();
  m = mydate.getMinutes();
  s = mydate.getSeconds();

  //如果小于10则加 0补位

  h = check(h);
  m = check(m);
  s = check(s);
  nowtime = h + ":" + m + ":" + s;
  document.getElementById("time").innerText = nowtime;
}
function check(i) {
  let num = Number(i) < 10 ? "0" + i : i;
  return num + "";
}

// 获取元素浏览器边框的距离
function getElementLeft(element) {
  let actualLeft = element.offsetLeft;
  let current = element.offsetParent;

  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }

  return actualLeft;
}

function getElementTop(element) {
  let actualTop = element.offsetTop;
  let current = element.offsetParent;

  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  return actualTop;
}

function setBrowserListTandL() {
  hrefBstate = "1";
  BliLeft = getElementLeft(setB) - 20;
  BliTop = getElementTop(setB) + 55;
}

function hidOrshowhrefB() {
  let mBliTop = String(BliTop);
  let mBliLeft = String(BliLeft);
  let pos = "position: fixed; " + "top: " + mBliTop + "px;" + "left:" + mBliLeft + "px;";
  hrefB.style =
    "display: block; transform: scale(" + hrefBstate + ");" + "opacity: " + hrefBstate + ";" + pos;
}

function search() {
  let searchText = document.getElementById("search").value;
  open(shref + searchText);
}

// 设置深浅模式切换
let mOrd = 1;
function moonOrDay() {
  if (mOrd == 1) {
    mOrd = -1;
    document.documentElement.style.setProperty("--timeColor", "#aaaaaa");
    document.documentElement.style.setProperty("--searchColor", "0");
    document.documentElement.style.setProperty("--searchTaB", "#bbbbbb");
    document.documentElement.style.setProperty("--bgimg", 'url("./imgs/BG2.jpg")');
    document.documentElement.style.setProperty("--libg", "#eeeeee22");
  } else {
    mOrd = 1;
    document.documentElement.style.setProperty("--timeColor", "#eeeeee");
    document.documentElement.style.setProperty("--searchColor", "255");
    document.documentElement.style.setProperty("--searchTaB", "black");
    document.documentElement.style.setProperty("--bgimg", 'url("./imgs/BG1.jpg")');
    document.documentElement.style.setProperty("--libg", "#66666611");
  }
}

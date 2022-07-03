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
    if (event.key == "Enter") {
        search();
    }
});

BliLeft = getElementLeft(setB) - 20;
BliTop = getElementTop(setB) + 55;
time();

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
let changeList = {
    "--timeColor": ["#aaaaaa", "#eeeeee"],
    "--searchColor": ["0", "255"],
    "--searchTaB": ["#bbbbbb", "black"],
    "--bgimg": ['url("./imgs/BG2.jpg")', 'url("./imgs/BG1.jpg")'],
    "--libg": ["#eeeeee22", "#66666611"]
}
function moonOrDay() {
    function change() {
        for (let i in changeList) {
            console.log(i);
        }
    }
    if (mOrd === 1) {
        mOrd = 0;
        document.documentElement.style.setProperty("--timeColor", "#aaaaaa");
    } else {
        mOrd = 1;
    }
}

let add =
    '<div class="tiles">' + getAddTilesElement().innerHTML + '</div>';


let logeDemo, textLoge, tileHref, tileName, tilesBox, setLogeDemoColor;
logeDemo = document.getElementById("logeDemo").children[0];
textLoge = document.getElementById("textLoge");
tileHref = document.getElementById("tileHref");
tileName = document.getElementById("tileName");
tilesBox = document.getElementsByClassName("tileBox")[0];
setLogeDemoColor = document.getElementById("setLogeColor");
//为AddTiles添加事件
let AddTiles, full;
AddTiles = document.querySelector("#AddTiles");
AddTiles.addEventListener("click", newTileCard_off_on);
//为full添加事件
full = document.querySelector("#full");
full.addEventListener("click", newTileCard_off_on);
//修改后的网址卡片相关代码显示和隐藏
function newTileCard_off_on() {
    let full = document.querySelector("#full");
    let newTileCard = document.querySelector("#newTileCard");
    //获取full的display属性值
    let full_display = window.getComputedStyle(full, null).display;
    //判断display属性值
    if (full_display == "none") {
        newTileCard.style.display = "flex";
        full.style.display = "flex";
    } else {
        newTileCard.style.display = "none";
        full.style.display = "none";
    }
}


function SetLogeDemoText() {
    if (textLoge.value.length > 3) {
        textLoge.value = textLoge.value.substring(0, 3);
    }
    logeDemo.innerText = textLoge.value;
}

function addTile() {
    if (tileHref.value == "" || tileName.value == "") {
        alert("网址或名称不能为空");
        return;
    }

    let color = setLogeDemoColor.value;
    let href = tileHref.value.indexOf("https://", 0) == "-1" || tileHref.value.indexOf("http://", 0) == "-1"
        ? "https://" + tileHref.value
        : tileHref.value;
    let newTile =
        '<div class="tiles">' +
        '<a href="' +
        href +
        '" target="_blank">' +
        '<div class="text" style="background:' +
        color +
        ';"><p class="f32">' +
        logeDemo.innerText +
        "</p></div></a><p>" +
        tileName.value +
        "</p></div>";
    tilesBox.innerHTML += newTile + add;
    tilesBox.removeChild(getAddTilesElement());
    tilesBox.lastChild.setAttribute("add", "add");
    // 重新添加add图标后重新赋值变量
    AddTiles = document.querySelector("#AddTiles");
    AddTiles.addEventListener("click", newTileCard_off_on);
    full = document.querySelector("#full");
    full.addEventListener("click", newTileCard_off_on);
    logeDemo = document.getElementById("logeDemo").children[0];
    textLoge = document.getElementById("textLoge");
    tileHref = document.getElementById("tileHref");
    tileName = document.getElementById("tileName");
    tilesBox = document.getElementsByClassName("tileBox")[0];
    setLogeDemoColor = document.getElementById("setLogeColor");
}

function getAddTilesElement() {
    let tiles = document.getElementsByClassName("tiles");
    for (const i of tiles) {
        if (i.getAttribute("add") == "add") {
            return i;
        }
    }
}

document.getElementById("btnSLC").onclick = function () {
    setLogeDemoColor.click();
};

window.onload = function () {
    setInterval(
        "document.documentElement.style.setProperty('--logeDemoColor', setLogeDemoColor.value);",
        50
    );
    setInterval("time()", 1000);
    setInterval("hidOrshowhrefB()", 10);
};

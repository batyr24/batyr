function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
const button = document.querySelector(".header__burger");
const menu = document.querySelector(".header__items");
button.addEventListener("click", function (event) {
  button.classList.toggle("_active");
  menu.classList.toggle("_active");
});
const itemS = document.querySelectorAll(".header__item");
itemS.forEach((element) => {
  element.addEventListener("click", function (event) {
    if (event.target.tagName != "A") {
      return;
    }
    button.classList.remove("_active");
    menu.classList.remove("_active");
  });
});
;
const btn1 = document.querySelector(".main__btn");
const box1 = document.querySelector(".md__1");

btn1.addEventListener("click", btnEvent1);
function btnEvent1(q) {
  box1.classList.toggle("_active");
}

const btn2 = document.querySelector(".cost__btn");
const box2 = document.querySelector(".md__2");

btn2.addEventListener("click", btnEvent2);
function btnEvent2(q) {
  box2.classList.toggle("_active");
}

const popaps = document.querySelectorAll(".md");
for (let popap of popaps) {
  popap.addEventListener("click", pop);
  function pop(q) {
    if (q.target != q.currentTarget) {
      return;
    }
    box1.classList.remove("_active");
    box2.classList.remove("_active");
  }
}

const closes = document.querySelectorAll(".md__x");
for (let x of closes) {
  x.addEventListener("click", cl);
  function cl(q) {
    box1.classList.remove("_active");
    box2.classList.remove("_active");
  }
}
;

AOS.init();

// phone navbar
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const Navlink = document.getElementById("navlinks");

  menuToggle.addEventListener("click", () => {
    Navlink.classList.toggle("active");
  });
});

function showMoreLess() {
  let Less = document.getElementById("less");
  let More = document.getElementById("more");
  let butn = document.getElementById("btn");

  if (Less.style.display == "none") {
    Less.style.display = "inline";
    More.style.display = "none";
    butn.innerHTML = "Read More";
  } else {
    Less.style.display = "none";
    butn.innerHTML = "Read Less";
    More.style.display = "inline";
  }
}

function showMoreLes() {
  let Les = document.getElementById("les");
  let Mor = document.getElementById("mor");
  let buts = document.getElementById("btns");

  if (Les.style.display == "none") {
    Les.style.display = "inline";
    Mor.style.display = "none";
    buts.innerHTML = "Read More";
  } else {
    Les.style.display = "none";
    buts.innerHTML = "Read Less";
    Mor.style.display = "inline";
  }
}
function showMoreLe() {
  let Le = document.getElementById("le");
  let Mo = document.getElementById("mo");
  let butz = document.getElementById("btnz");

  if (Le.style.display == "none") {
    Le.style.display = "inline";
    Mo.style.display = "none";
    butz.innerHTML = "Read More";
  } else {
    Le.style.display = "none";
    butz.innerHTML = "Read Less";
    Mo.style.display = "inline";
  }
}
function showMoreL() {
  let L = document.getElementById("l");
  let M = document.getElementById("m");
  let but = document.getElementById("bt");

  if (L.style.display == "none") {
    L.style.display = "inline";
    M.style.display = "none";
    but.innerHTML = "Read More";
  } else {
    L.style.display = "none";
    but.innerHTML = "Read Less";
    M.style.display = "inline";
  }
}
function showMore() {
  let Li = document.getElementById("li");
  let Mi = document.getElementById("mi");
  let buti = document.getElementById("bti");

  if (Li.style.display == "none") {
    Li.style.display = "inline";
    Mi.style.display = "none";
    buti.innerHTML = "Read More";
  } else {
    Li.style.display = "none";
    buti.innerHTML = "Read Less";
    Mi.style.display = "inline";
  }
}
function showMor() {
  let La = document.getElementById("la");
  let Ma = document.getElementById("ma");
  let buta = document.getElementById("bte");

  if (La.style.display == "none") {
    La.style.display = "inline";
    Ma.style.display = "none";
    buta.innerHTML = "Read More";
  } else {
    La.style.display = "none";
    buta.innerHTML = "Read Less";
    Ma.style.display = "inline";
  }
}

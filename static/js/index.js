const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Jalali date
jalaliDatepicker.startWatch();

// show side bar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
// close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// change theme

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// localStorage.setItem("lastname",
// document.body.classList.toggle("dark-theme-variables")
// );
var dark_mood = localStorage.getItem("lastname");
if (dark_mood == "True"){
  document.body.classList.toggle("dark-theme-variables");
}
// document.getElementById("demo").innerHTML = localStorage.getItem("lastname");

// توابع فس شاگردان

function discountFunction() {
  var baqi = document.getElementById("baqi").value;
  var fee = document.getElementById("fee").value;
  var discount = document.getElementById("descount").value;

  var mySelect = document.getElementById("mySelect").value;

  var dic = (discount * fee) / 100;
  dic = fee - dic;
  document.getElementById("amount").innerHTML = "Amount Pay: " + (dic - baqi);
  document.getElementById("level_bel").innerHTML = mySelect;
}

function popupToggle() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("actived");
}
function analyticsToggle() {
  const popupana = document.getElementById("popupana");
  popupana.classList.toggle("actived");
}

function itemToggle(type) {
  if (type == 'English'){
      const popEnglish = document.getElementById('popEnglish');
      popEnglish.classList.toggle('actived')
  }
  else if (type == "Computer"){
      const popComputer = document.getElementById('popComputer');
      popComputer.classList.toggle('actived')
  }
  else if (type == "Chains"){
      const popChains = document.getElementById('popChains');
      popChains.classList.toggle('actived')
  }
  else if (type == "French"){
    const popFrench = document.getElementById('popFrench');
    popFrench.classList.toggle('actived')
  }
  else if (type == "Almany"){
    const popAlmany = document.getElementById('popAlmany');
    popAlmany.classList.toggle('actived')
  }
}

function lockBtn(obj) {
  obj.style.opacity = "0.6";
  obj.style.display = "block";
  obj.style.visibility = "hidden";
  obj.innerHTML = "Thank You...";
}

function showDescountEng() {
  getValue = document.getElementById("selector_eng").value;
  var arr = getValue.split(",");
  discount = arr[0];
  commend = arr[1];
  discount = Number(discount)
  if (discount>0) {
    document.getElementById("descunt_eng").attributes.removeNamedItem("hidden");
    document.getElementById("comment_eng").attributes.removeNamedItem("hidden");
  }

  document.getElementById("descunt_eng").value=discount;
  document.getElementById("comment_eng").value=commend;
}

function showDescountCom() {
  getValue = document.getElementById("selector_com").value;
  var arr = getValue.split(",");
  discount = arr[0];
  commend = arr[1];
  discount = Number(discount)
  if (discount>0) {
    document.getElementById("descunt_com").attributes.removeNamedItem("hidden");
    document.getElementById("comment_com").attributes.removeNamedItem("hidden");
  }

  document.getElementById("descunt_com").value=discount;
  document.getElementById("comment_com").value=commend;
}

function showDescountAlm() {
  getValue = document.getElementById("selector_alm").value;
  var arr = getValue.split(",");
  discount = arr[0];
  commend = arr[1];
  discount = Number(discount)
  if (discount>0) {
    document.getElementById("descunt_alm").attributes.removeNamedItem("hidden");
    document.getElementById("comment_alm").attributes.removeNamedItem("hidden");
  }

  document.getElementById("descunt_alm").value=discount;
  document.getElementById("comment_alm").value=commend;
}

function showDescountCha() {
  getValue = document.getElementById("selector_cha").value;
  var arr = getValue.split(",");
  discount = arr[0];
  commend = arr[1];
  discount = Number(discount)
  if (discount>0) {
    document.getElementById("descunt_cha").attributes.removeNamedItem("hidden");
    document.getElementById("comment_cha").attributes.removeNamedItem("hidden");
  }

  document.getElementById("descunt_cha").value=discount;
  document.getElementById("comment_cha").value=commend;
}

function showDescountFre() {
  getValue = document.getElementById("selector_fre").value;
  var arr = getValue.split(",");
  discount = arr[0];
  commend = arr[1];
  discount = Number(discount)
  if (discount>0) {
    document.getElementById("descunt_fre").attributes.removeNamedItem("hidden");
    document.getElementById("comment_fre").attributes.removeNamedItem("hidden");
  }

  document.getElementById("descunt_fre").value=discount;
  document.getElementById("comment_fre").value=commend;
}
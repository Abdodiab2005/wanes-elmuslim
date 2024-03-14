// logout button
// document.getElementById("logout-icon").addEventListener("click", () => {
//   localStorage.clear();
//   location.replace("../html/home.html");
// });

// declare the selection btns
let tasBtn1 = document.getElementById("tasBtn1");
let tasBtn2 = document.getElementById("tasBtn2");
let tasBtn3 = document.getElementById("tasBtn3");
let tasBtn4 = document.getElementById("tasBtn4");
let tasBtn5 = document.getElementById("tasBtn5");
let tasBtn6 = document.getElementById("tasBtn6");

// declare the displayed selected elements
let selectedItem = document.getElementById("SelectedItem");
let counterScreen = document.getElementById("counterVal");

// declare counters
let counterVal1;
let counterVal2;
let counterVal3;
let counterVal4;
let counterVal5;
let counterVal6;

// counter Btns
let counterBtns1 = document.getElementById("counterBtns1");
let counterBtns2 = document.getElementById("counterBtns2");
let counterBtns3 = document.getElementById("counterBtns3");
let counterBtns4 = document.getElementById("counterBtns4");
let counterBtns5 = document.getElementById("counterBtns5");
let counterBtns6 = document.getElementById("counterBtns6");

// increasment Btn
let incBtn1 = document.getElementById("inc1");
let incBtn2 = document.getElementById("inc2");
let incBtn3 = document.getElementById("inc3");
let incBtn4 = document.getElementById("inc4");
let incBtn5 = document.getElementById("inc5");
let incBtn6 = document.getElementById("inc6");

// reset Btns
let resetBtn1 = document.getElementById("reset1");
let resetBtn2 = document.getElementById("reset2");
let resetBtn3 = document.getElementById("reset3");
let resetBtn4 = document.getElementById("reset4");
let resetBtn5 = document.getElementById("reset5");
let resetBtn6 = document.getElementById("reset6");

let counterBtns = document.querySelectorAll(".counter");

// سبحان الله Btn
tasBtn1.addEventListener("click", () => {
  selectedItem.innerText = tasBtn1.value;
  counterBtns.forEach((counterBtns) => {
    counterBtns.classList.add("hide");
  });
  counterBtns1.classList.remove("hide");
  counterVal1 = localStorage.getItem("سبحان الله");
  counterScreen.innerText = counterVal1;
  incBtn1.onclick = () => {
    counterVal1++;
    counterScreen.innerHTML = counterVal1;
    localStorage.setItem("سبحان الله", counterVal1);
  };
  resetBtn1.addEventListener("click", () => {
    localStorage.setItem("سبحان الله", 0);
    counterVal1 = 0;
    counterScreen.innerText = counterVal1;
  });
});

// الحمدلله Btn
tasBtn2.addEventListener("click", () => {
  selectedItem.innerText = tasBtn2.value;
  counterBtns.forEach((counterBtns) => {
    counterBtns.classList.add("hide");
  });
  counterBtns2.classList.remove("hide");
  counterVal2 = localStorage.getItem("الحمدلله");
  counterScreen.innerText = counterVal2;
  incBtn2.onclick = () => {
    counterVal2++;
    counterScreen.innerHTML = counterVal2;
    localStorage.setItem("الحمدلله", counterVal2);
  };
  resetBtn2.addEventListener("click", () => {
    localStorage.setItem("الحمدلله", 0);
    counterVal2 = 0;
    counterScreen.innerText = counterVal2;
  });
});

// الله أكبر Btn
tasBtn3.addEventListener("click", () => {
  selectedItem.innerText = tasBtn3.value;
  counterBtns.forEach((counterBtns) => {
    counterBtns.classList.add("hide");
  });
  counterBtns3.classList.remove("hide");
  counterVal3 = localStorage.getItem("الله أكبر");
  counterScreen.innerText = counterVal3;
  incBtn3.onclick = () => {
    counterVal3++;
    counterScreen.innerHTML = counterVal3;
    localStorage.setItem("الله أكبر", counterVal3);
  };
  resetBtn3.addEventListener("click", () => {
    localStorage.setItem("الله أكبر", 0);
    counterVal3 = 0;
    counterScreen.innerText = counterVal3;
  });
});

// أستغفر الله Btn
tasBtn4.addEventListener("click", () => {
  selectedItem.innerText = tasBtn4.value;
  counterBtns.forEach((counterBtns) => {
    counterBtns.classList.add("hide");
  });
  counterBtns4.classList.remove("hide");
  counterVal4 = localStorage.getItem("أستغفر الله");
  counterScreen.innerText = counterVal4;
  incBtn4.onclick = () => {
    counterVal4++;
    counterScreen.innerHTML = counterVal4;
    localStorage.setItem("أستغفر الله", counterVal4);
  };
  resetBtn4.addEventListener("click", () => {
    localStorage.setItem("أستغفر الله", 0);
    counterVal4 = 0;
    counterScreen.innerText = counterVal4;
  });
});

// لا إله إلا الله Btn
tasBtn5.addEventListener("click", () => {
  selectedItem.innerText = tasBtn5.value;
  counterBtns.forEach((counterBtns) => {
    counterBtns.classList.add("hide");
  });
  counterBtns5.classList.remove("hide");
  counterVal5 = localStorage.getItem("لا إله إلا الله");
  counterScreen.innerText = counterVal5;
  incBtn5.onclick = () => {
    counterVal5++;
    counterScreen.innerHTML = counterVal5;
    localStorage.setItem("لا إله إلا الله", counterVal5);
  };
  resetBtn5.addEventListener("click", () => {
    localStorage.setItem("لا إله إلا الله", 0);
    counterVal5 = 0;
    counterScreen.innerText = counterVal5;
  });
});

// اللهم صلي على سيدنا محمد Btn
tasBtn6.addEventListener("click", () => {
  selectedItem.innerText = tasBtn6.value;
  counterBtns.forEach((counterBtns) => {
    counterBtns.classList.add("hide");
  });
  counterBtns6.classList.remove("hide");
  counterVal6 = localStorage.getItem("اللهم صلي وسلم وبارك على سيدنا محمد");
  counterScreen.innerText = counterVal6;
  incBtn6.onclick = () => {
    counterVal6++;
    counterScreen.innerHTML = counterVal6;
    localStorage.setItem("اللهم صلي وسلم وبارك على سيدنا محمد", counterVal6);
  };
  resetBtn6.addEventListener("click", () => {
    localStorage.setItem("اللهم صلي وسلم وبارك على سيدنا محمد", 0);
    counterVal6 = 0;
    counterScreen.innerText = counterVal6;
  });
});

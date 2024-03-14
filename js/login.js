let userinput = document.querySelector("#userinput");
let submitBtn = document.querySelector("#subBtn");
let userName;
let userInp = document.getElementById("userinput");
let lablName = document.getElementById("labinp");

// Say Error when the field is empty
function sayError() {
  Swal.fire({
    title: "حدث خطأ أثناء تسجيل الدخول",
    text: "لا يجب عليك ترك الحقل فارغاً",
    icon: "error",
    confirmButtonText: "حسناً",
    confirmButtonColor: "#027fff",
  });
}

// replace the url when ok btn is clicked
function kBtn() {
  location.replace("../html/tasbeeh.html");
  localStorage.setItem("سبحان الله", 0);
  localStorage.setItem("الحمدلله", 0);
  localStorage.setItem("الله أكبر", 0);
  localStorage.setItem("لا إله إلا الله", 0);
  localStorage.setItem("أستغفر الله", 0);
  localStorage.setItem("اللهم صلي وسلم وبارك على سيدنا محمد", 0);
}

// Limit 20 Charachter only
function sayError2() {
  Swal.fire({
    title: "حدث خطأ أثناء تسجيل الدخول",
    text: "لا يجب أن يتجاوز الاسم 20 حرفاً",
    icon: "error",
    confirmButtonText: "حسناً",
    confirmButtonColor: "#027fff",
  });
}

// Popup-Hello
function sayHello() {
  Swal.fire({
    title: "تم تسجيل الدخول بنجاح",
    text: `مرحباً بك ${userInp.value}`,
    icon: "success",
    confirmButtonText: "لنذهب",
    confirmButtonColor: "#76d668",
  }).then((result) => {
    if (result.isConfirmed) {
      kBtn();
    }
  });
}

// form validation
document.forms[0].onsubmit = (ele) => {
  let checkVal = false;
  ele.preventDefault();
  userName = userinput.value;
  if (userinput.value.length > 0) {
    sayHello();
    checkVal = true;
    localStorage.setItem("UNV", userName);
    if (userinput.value.length > 20) {
      sayError2();
    }
  } else {
    sayError();
  }
};

// animate the label on field click
userInp.onfocus = () => {
  lablName.style.cssText =
    "transform: translateX(10px) translateY(-50px);font-size: 1rem;font-weight: 600;";
};

// recolor the field on blur
userInp.onblur = () => {
  if (userInp.value === "") {
    lablName.style.cssText =
      "transform: translateX() translateY(50px);font-size: 25px;font-weight: 600;color: red;";
    userInp.style.cssText = "border-bottom: 2px solid red;";
    console.log("empty");
  } else if (userInp.value.length > 20) {
    lablName.style.cssText =
      "color: red; transform: translateX(10px) translateY(-50px);font-size: 1rem;font-weight: 600;";
    userInp.style.cssText = "border-bottom: 2px solid red;";
    console.log(">>20");
  } else {
    lablName.style.cssText =
      "color: green; transform: translateX(10px) translateY(-50px);font-size: 1rem;font-weight: 600;";
    userInp.style.cssText = "border-bottom: 2px solid green;";
    console.log("valid");
  }
};

// redirect for the home page
if (localStorage.getItem("UNV")) {
  location.replace("../html/home.html");
}

if (localStorage.getItem("UNV")) {
  document.querySelector("aside").style.visibility = "visible";
}

if (!localStorage.getItem("UNV")) {
  location.replace("login.html");
}

document.getElementById("logout-icon").addEventListener("click", () => {
  warnPop();
});

function returnHome() {
  localStorage.clear();
  location.replace("../html/home.html");
}

function warnPop() {
  Swal.fire({
    title: "هل أنت متأكد أنك بالفعل تريد تسجيل الخروج ؟",
    text: "سيتم حذف جميع عدادات التسبيح !",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "الخروج",
    cancelButtonText: "الرجوع",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "تم تسجيل الخروج",
        text: "تم تسجيل خروجك وحذف جميع العدادات بنجاح",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          returnHome();
        }
      });
    }
  });
}

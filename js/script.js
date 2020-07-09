//! ================Клик вне области +  class

const btnMenu = document.querySelector(".");
const menu = document.querySelector(".");
const toggleMenu = function () {
  menu.classList.toggle("open");
};

btnMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
  const its_btnMenu = target == btnMenu;
  const menu_is_active = menu.classList.contains("open");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});

//! =============================menu burger

let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    iconMenu.classList.toggle("active");
    body.classList.toggle("lock");
    menuBody.classList.toggle("active");
  });
}

//! ===============================function ibg()
function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css("background-image", 'url("' + $(this).find("img").attr("src") + '")');
    }
  });
}

ibg();

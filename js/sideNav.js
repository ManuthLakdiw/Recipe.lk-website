console.log("sideNav Loaded..");

const burger = document.getElementById("burger");
const menuPanel = document.getElementById("menu-panel-id");
const closeBtn = document.getElementById("btn-close");


burger.addEventListener("click", () => {
  menuPanel.style.right = "0";

  console.log("btn clicked");
});

closeBtn.addEventListener("click", () => {
  menuPanel.style.right = "-100%";
});

const dropdownMenus = document.querySelectorAll(".menu-panel li:has(ul)");

dropdownMenus.forEach((menu) => {
  menu.addEventListener("click", (event) => {
    event.stopPropagation();

    dropdownMenus.forEach((otherMenu) => {
      if (otherMenu !== menu) {
        otherMenu.classList.remove("open");
        otherMenu.querySelector("ul").classList.remove("show-dropdown");
      }
    });

    menu.classList.toggle("open");
    menu.querySelector("ul").classList.toggle("show-dropdown");
  });
});

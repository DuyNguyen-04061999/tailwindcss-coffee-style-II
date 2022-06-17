const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const topMenu = $("#npd-top-menu");
let magazineDesc = document.querySelector("#npd-magazine-desc")
console.log(magazineDesc);

if (matchMedia) {
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 1024px
    topMenu.style.height = `unset`;
    topMenu.classList.remove("npd-height-active");
    magazineDesc.innerHTML = `The most versatile
    furniture system ever
    created. <br> Designed to fit your
    life.`;
  } else {
    topMenu.style.height = `0px`;
    magazineDesc.innerHTML = `The most versatile
    furniture system ever
    created. Designed to fit your
    life.`;
  }
}

function resetTopMenu() {
  topMenu.style.height = `0px`;
  topMenu.classList.remove("npd-height-active");
}
document.addEventListener("click", function (e) {
  const toggleTopMenuIcon = $("#npd-toggle-top-menu-icon");
  if (toggleTopMenuIcon.contains(e.target)) {
    console.log(e.target);
    topMenu.style.height = `${topMenu.scrollHeight}px`;
    topMenu.classList.toggle("npd-height-active");
    if (!topMenu.classList.contains("npd-height-active")) {
      resetTopMenu();
    }
  } else if (
    !toggleTopMenuIcon.contains(e.target) &&
    topMenu.classList.contains("npd-height-active")
  ) {
    resetTopMenu();
  }
});

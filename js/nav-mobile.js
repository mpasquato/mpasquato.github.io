document.addEventListener("DOMContentLoaded", function() {
    let navMobileButton = document.getElementById("nav-mobile-button");
    let navMobileWrapper = document.getElementById("nav-mobile-wrapper");
    let navMobileLogo = document.getElementById("nav-mobile-logo");
    let navMobileContent = document.getElementById("nav-mobile-content");

    navMobileButton.addEventListener("click", function() {
      navMobileWrapper.classList.toggle("nav-mobile-wrapper-expanded");
      navMobileContent.classList.toggle("nav-mobile-content-toggle");
      navMobileLogo.style.display = "none";
      if (navMobileButton.textContent === "menu") {
        navMobileButton.textContent = "close";
      } else {
        navMobileButton.textContent = "menu";
        navMobileLogo.style.display = "block";
      }
    });
});
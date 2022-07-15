let navButton = document.querySelector("nav button");
let logoButton = document.querySelector(".logo button");
let header = document.querySelector("header");
let logoSpan = document.querySelector("header .logo span");
let navA = document.querySelector("nav .a");
let navB = document.querySelector("nav .b");
let navC = document.querySelector("nav .c");
let mobileheader = document.querySelector(".mobile-header");
let mobileLogoSpan = document.querySelector(".mobile-header .logo a span");
let link1 = document.querySelector(".n");
let link2 = document.querySelector(".m");
let link3 = document.querySelector(".s");
let contact = document.querySelector("nav .contact-icon");
let certificates = document.querySelector(".certificates");
let mainA = document.querySelector(".main a");
let experience = document.querySelector(".experience");
let main = document.querySelector(".main");
let aboutMe = document.querySelector(".about-me");
let h4 = document.querySelector(".company-information h4");
let conact = document.querySelector(".contact");
let footer = document.querySelector("footer");
let line1 = document.querySelector(".menu-icon .line-1");
let line2 = document.querySelector(".menu-icon .line-2");


navButton.addEventListener("click", () => {
    navButton.classList.toggle("active");
    logoSpan.classList.toggle("active");
    navA.classList.toggle("active");
    navB.classList.toggle("active");
    navC.classList.toggle("active");
    header.classList.toggle("active");
    contact.classList.toggle("active");
    certificates.classList.toggle("active");
    mainA.classList.toggle("active");
    experience.classList.toggle("active");
    main.classList.toggle("active");
    aboutMe.classList.toggle("active");
    h4.classList.toggle("active");
    conact.classList.toggle("active");
    footer.classList.toggle("active");
})
logoButton.addEventListener("click", () => {
    logoButton.classList.toggle("active");
    contact.classList.toggle("active");
    certificates.classList.toggle("active");
    mainA.classList.toggle("active");
    experience.classList.toggle("active");
    main.classList.toggle("active");
    aboutMe.classList.toggle("active");
    h4.classList.toggle("active");
    conact.classList.toggle("active");
    footer.classList.toggle("active");
    mobileheader.classList.toggle("active");
    mobileLogoSpan.classList.toggle("active");
    link1.classList.toggle("active");
    link2.classList.toggle("active");
    link3.classList.toggle("active");
    line1.classList.toggle("active");
    line2.classList.toggle("active");
})




let menuIconContainer = document.querySelector(".menu-icon-container");
let mobileHeader = document.querySelector(".mobile-header");

menuIconContainer.addEventListener("click", () => {
    mobileHeader.classList.toggle("down");
})

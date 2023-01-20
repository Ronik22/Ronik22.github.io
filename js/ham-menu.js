const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");

const navigationSection = document.querySelector(".navigation");
const headerSmallMenuLinks2 = document.querySelectorAll(".nav-link");

// const ld_gray = gsap.timeline({paused: true});
//   ld_gray.from(".nav-item", {
//     x: -1000,
//     stagger: 0.2,
//     delay: 1,
//     skewY: 7,
//     ease: "power4.out",
//   })

hamMenuBtn.addEventListener("click", () => {
	// ld_gray.restart();

	if (navigationSection.classList.contains("nav-active")) {
		navigationSection.classList.remove("nav-active");
	} else {
		navigationSection.classList.add("nav-active");
	}

	if (headerHamMenuBtn.getAttribute("aria-expanded") === "true") {
		headerHamMenuBtn.classList.remove("opened");
		headerHamMenuBtn.setAttribute("aria-expanded", "false");
	} else {
		headerHamMenuBtn.classList.add("opened");
		headerHamMenuBtn.setAttribute("aria-expanded", "true");
	}
});

for (let i = 0; i < headerSmallMenuLinks2.length; i++) {
	headerSmallMenuLinks2[i].addEventListener("click", (event) => {
		event.preventDefault();
		let redirectlink = event.target.getAttribute("href");
		setTimeout(() => {
			window.location.href = redirectlink;
		}, 1000);
		navigationSection.classList.remove("nav-active");
		headerHamMenuBtn.classList.remove("opened");
		headerHamMenuBtn.setAttribute("aria-expanded", "false");
	});
}

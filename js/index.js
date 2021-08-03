$(document).ready(() => {
	$(window).on("load", function () {
		setTimeout(function () {
			$(".loader").hide(300);
			$("body").css("overflow", "auto");

			var tl = gsap.timeline();
			var t2 = gsap.timeline();

			tl.from("#colp1", {
				y: "-100vh",
				duration: 1,
			})
				.from("#hero-text", {
					scale: 0,
					duration: 1.5,
					ease: "bounce.out",
				})
				.from(".animnav", {
					y: "-100vh",
					duration: 1.2,
					ease: "elastic.out(1, 0.5)",
				});

			t2.from("#colp2", {
				y: "100vh",
				duration: 1,
			})
				.from(".scroll-down", {
					y: "100vh",
					duration: 2,
				})
				.from(".action", {
					scale: 0,
					duration: 1,
					ease: "elastic.out(1, 0.3)",
				});

				gsap.timeline({scrollTrigger:{
					trigger: "#aboutMe",
					scrub: 1.5,
					end:"top 40%",
				}})
				.from("#about-img", {
					x: -1000,
					duration: 2
				})
				.from("#about-para", {
					x: 1000,
				});


			gsap.from(".pcard", {
				scrollTrigger: {
					trigger: ".pcard",
					scrub: 1,
					end: "20px 80%",
				},
				scale: 0,
			});

			// Skew element on scroll (exp)
			// //...........class="skewElem"
			// let proxy = { skew: 0 },
			// skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"),
			// clamp = gsap.utils.clamp(-20, 20);
			// ScrollTrigger.create({
			// 	onUpdate: (self) => {
			// 	let skew = clamp(self.getVelocity() / -300);
			// 	if (Math.abs(skew) > Math.abs(proxy.skew)) {
			// 	proxy.skew = skew;
			// 	gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
			// }
			// }
			// });
			// gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

			document.body.addEventListener("mousemove", (evt) => {
				const mouseX = evt.clientX;
				const mouseY = evt.clientY;

				gsap.set(".cursor2", {
					x: mouseX,
					y: mouseY,
				});
				gsap.to(".cursor", {
					x: mouseX,
					y: mouseY,
					stagger: -0.1,
				});
			});

			$(".cursor-change").hover(
				function () {
					$(".cursor").addClass("chover");
				},
				function () {
					$(".cursor").removeClass("chover");
				}
			);

			$(".nav-link").click(function (event) {
				event.preventDefault();
				let redirectlink = $(this).attr("href");
				setTimeout(() => {
					window.location.href = redirectlink;
				}, 1000);
				$(".nav-toggle").toggleClass("nav-active");
				$(".navigation").toggleClass("nav-active");			
			});


			$(".nav-toggle").click(function() {
				$(this).toggleClass("nav-active");
				$(".navigation").toggleClass("nav-active");
			});


		}, 1000);
	});
});

function actionToggle() {
	$(".action").toggleClass("sl-active");
}

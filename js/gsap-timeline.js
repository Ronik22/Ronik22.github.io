// split-text
const myText = new SplitType(".split-me");
// split-text end

const master = gsap.timeline();

// onLoad.from(".line span", 1.8, {
//   y: 100,
//   ease: "power4.out",
//   delay: 1,
// skewY: 7,
//   stagger: {
//     amount: 0.3
//   }
// })

const loader = () => {
	const t1 = gsap.timeline();
	t1.to(".spinner-body", {
		y: "-100vh",
		delay: 1,
		duration: 1,
		ease: "power2.inOut",
		display: "none",
	})
		.to(".spinner-after", {
			y: "100vh",
			duration: 1.25,
			ease: "power4.inOut",
			display: "none",
		})
		.to("body", {
			overflow: "auto",
		});

	return t1;
};

const onLoad = () => {
	const t2 = gsap.timeline();
	t2.to(".char", {
		y: 0,
		// stagger: 0.01,
		duration: 0.1,
	})
		// .from("", {
		//   y: -100,
		//   opacity: 0,
		//   duration: 1,
		//   ease: "power2.inOut",
		// })
		.from(".home-hero__cta,.header", {
			y: -100,
			opacity: 0,
			duration: 1,
			ease: "power2.inOut",
		})
		.from(".action", {
			scale: 0,
			duration: 1,
			ease: "elastic.out(1, 0.3)",
		})
		.from(".home-hero__mouse-scroll-cont", {
			scale: 0,
			duration: 0.5,
			ease: "power4.inOut",
		});

	return t2;
};

master.add(loader()).add(onLoad());

const $ = (ele) => {
	return document.querySelector(ele);
};
var $body = $("body");
var $modal = $(".my-modal");

const open_modal = gsap.timeline({ paused: true });
open_modal.from(".my-modal", {
	scale: 0,
	duration: 1,
	opacity: 1,
	ease: "power4.out",
});

const close_modal = gsap.timeline({ paused: true });
close_modal.to(".my-modal", {
	scale: 0,
	duration: 1,
	opacity: 0,
	ease: "power4.out",
});

$(".js-close").addEventListener("click", () => {
	close_modal.restart();
	$body.classList.remove("no-scroll");
	// $modal.style.display = "none";
});

document.querySelectorAll(".js-open").forEach((ele) => {
	ele.addEventListener("click", () => {
		// console.log(ele);
		fragment($("#dynamic-modal"), ele.getAttribute("data-include"));
		$modal.style.display = "flex";
		open_modal.restart();
		$body.classList.add("no-scroll");
	});
});

function fragment(el, url) {
	var localTest = /^(?:file):/,
		xmlhttp = new XMLHttpRequest(),
		status = 0;

	xmlhttp.onreadystatechange = function () {
		/* if we are on a local protocol, and we have response text, we'll assume
		 *  				things were sucessful */
		if (xmlhttp.readyState == 4) {
			status = xmlhttp.status;
		}
		if (localTest.test(location.href) && xmlhttp.responseText) {
			status = 200;
		}
		if (xmlhttp.readyState == 4 && status == 200) {
			el.innerHTML = xmlhttp.responseText;
		}
	};

	try {
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	} catch (err) {
		/* todo catch error */
		console.log(err);
	}
}

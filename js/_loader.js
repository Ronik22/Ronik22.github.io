const loader = document.querySelector(".spinner-body");
const body = document.getElementsByTagName("body")[0];

window.addEventListener("load", function () {
	setTimeout(function () {
		loader.style.display = "none";
		body.style.overflow = "auto";
	}, 1000);
});

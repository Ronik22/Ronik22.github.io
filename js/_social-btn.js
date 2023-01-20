const socialBtn = document.querySelector(".action");
function actionToggle() {
	if (socialBtn.classList.contains("sl-active")) {
		socialBtn.classList.remove("sl-active");
	} else {
		socialBtn.classList.add("sl-active");
	}
}

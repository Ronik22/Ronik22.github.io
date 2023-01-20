function toggleText() {
	var showMoreText = document.getElementById("moreText");
	var buttonText = document.getElementById("textButton");

	if (showMoreText.style.display === "inline") {
		showMoreText.style.display = "none";
		buttonText.innerHTML = `Show More <i class="fas fa-angle-down"></i>`;
	} else {
		showMoreText.style.display = "inline";
		buttonText.innerHTML = `Show Less <i class="fas fa-angle-up"></i>`;
	}
}

import mystyles from "./code.js";

let myPromise = new Promise((resolve, reject) => {

	var openComment, time, writeStyleChar, writeStyles;
	var styles = mystyles;

	openComment = false;

	writeStyleChar = function (which) {
		if (which === "/" && openComment === false) {
			openComment = true;
			styles = $("#style-text").html() + which;
		} else if (which === "/" && openComment === true) {
			openComment = false;
			styles = $("#style-text")
				.html()
				.replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
		} else if (which === ":") {
			styles = $("#style-text")
				.html()
				.replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
				
		} else if (which === ";") {
			styles = $("#style-text")
				.html()
				.replace(/([^:]*)$/, '<em class="value">$1</em>;');
		} else if (which === "{") {
			styles = $("#style-text")
				.html()
				.replace(/(.*)$/, '<em class="selector">$1</em>{');
		} else if (which === 'x' && /\dp/.test($("#style-text").html().slice(-2))) {
			styles = $("#style-text")
				.html()
				.replace(/p$/, '<em class="value px">px</em>');
		} else {
			styles = $("#style-text").html() + which;
		}
		$("#style-text").html(styles);
		return $("#style-tag").append(which);
	};

	writeStyles = function (message, index, interval) {
		var pre;
		if (index < message.length) {
			pre = document.getElementById("style-text");
			pre.scrollTop = pre.scrollHeight;
			writeStyleChar(message[index++]);
			return setTimeout(function () {
				return writeStyles(message, index, interval);
			}, interval);
		} else {
			resolve("success");
		}
	};

	$("body").append(
		`<style id="style-tag"></style>
        <p id="nav"></p>
        <pre contenteditable id="style-text"></pre>`
	);

	time = window.innerWidth <= 578 ? 4 : 1;
	// time = window.innerWidth <= 578 ? 4 : 16;

	writeStyles(styles, 0, time);

});


// $(document).on('mousemove', (event) => {
//     $('.follower').css({
//       left: event.clientX,
//       top: event.clientY,
//     });
// });


myPromise
.then(
	$(".owl-carousel").owlCarousel({
		autoplay: true,
		center: true,
		loop:true,
		items:1,
		margin:30,
		autoWidth:true,
		stagePadding: 200,
		responsive:{
			0:{
				items:1,
				stagePadding: 60
			},
			600:{
				items:1,
				stagePadding: 100
			},
			1000:{
				items:1,
				stagePadding: 200
			},
			1200:{
				items:1,
				stagePadding: 250
			},
			1400:{
				items:1,
				stagePadding: 300
			},
			1600:{
				items:1,
				stagePadding: 350
			},
			1800:{
				items:1,
				stagePadding: 400
			}
		}
	})
)
.then((value)=> {
	console.log(value);
	$( "pre" ).on('DOMSubtreeModified', function () {
		var textArea = document.createElement("textarea");
		textArea.value = $(this).text();
		document.body.appendChild(textArea);
		$("#style-tag").html($("textarea").val());
		textArea.remove();
	})
	.change();
});
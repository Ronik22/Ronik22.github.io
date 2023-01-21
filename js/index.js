function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

loadScript('./js/gsap-timeline.js');
// loadScript('./js/_loader.js');
loadScript('./js/ham-menu.js');
loadScript('./js/social-btn.js');
loadScript('./js/see-more.js');
loadScript('./js/modal.js');


function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

loadScript('../js/_gsap-timeline.js');
// loadScript('../js/_loader.js');
loadScript('../js/_ham-menu.js');
loadScript('../js/_social-btn.js');
loadScript('../js/_see-more.js');


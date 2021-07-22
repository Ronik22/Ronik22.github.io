var mystyles = `
/* 
* Hey, I am Ronik Bhattacharjee
* I am a passionate web developer from India
*/

* {
    transition: all 200ms;
}

body {
    background-color: #1a1c24; 
    color: #fff;
    font-size: 14px; 
    line-height: 1.4;
    -webkit-font-smoothing: subpixel-antialiased;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
}

pre { 
    position: fixed; 
    width: 96%;
    top: 60%; 
    bottom: 1px;

    overflow: auto;
    background-color: #2d313a; 
    color: #ffffff;
    border: 1px solid rgba(0,0,0,0.2);
    padding: 24px 12px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 3px;
    box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);
}

pre em:not(.comment) { font-style: normal; }

.comment       { color: #a3ff58c0; }
.selector      { color: #ffd82a; }
.selector .key { color: #d386ff; }
.key           { color: #00ccff; }
.value         { color: #f48eff; }
.valuepx     { color: #ff5f6f; }


/* 
* It's looking empty.... Let's style a navbar  
*/

ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    background-color: #333;
    width: 95%;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 14px;
  }
  
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px 18px;
    text-decoration: none;
  }
  
  li a:hover {
    background-color: #ffe947;
    color: black;
  }

  #social-nav {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }


/* 
* Hehe...I changed my mind...
* BTW, You can play with the code
* Try writing some css inside this container
*/
`;

export default mystyles
!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){if(document.body.style.backgroundColor=n(),d=setInterval((function(){document.body.style.backgroundColor=n()}),1e3))return t.setAttribute("disabled","disabled"),void e.removeAttribute("disabled","disabled")})),e.addEventListener("click",(function(){t.removeAttribute("disabled","disabled"),clearInterval(d),e.setAttribute("disabled","disabled")}));var d=null;function n(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.ad5801ff.js.map
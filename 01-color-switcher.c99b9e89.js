!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},n=null;t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(function(e){n=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(function(e){clearInterval(n),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.c99b9e89.js.map

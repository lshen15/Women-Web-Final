document.querySelector("#pinkbg").addEventListener("click", function() {
	console.log("pink background");
    document.querySelector('#mainstuff').style.backgroundColor = '#ffe2e6';
    document.querySelector('#pinkbg').style.boxShadow = '3px 3px black'
    document.querySelector('#whitebg').style.boxShadow = 'none'
});

document.querySelector("#whitebg").addEventListener("click", function() {
	console.log("white background");
    document.querySelector('#mainstuff').style.backgroundColor = 'white'
    document.querySelector('#whitebg').style.boxShadow = '3px 3px black'
    document.querySelector('#pinkbg').style.boxShadow = 'none'
});
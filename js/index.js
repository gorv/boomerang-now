document.onkeyup = function(e) {if (e.code === 'Space') {
	document.getElementById('one').style.display = 'none';
	document.getElementById('two').style.display = 'none';
	document.getElementById('three').style.display = 'block';
	document.getElementById('four').style.display = 'block';
}}

window.setInterval(function() {
    document.getElementById('viewCount').innerHTML = (Math.floor(Math.random() * 70) + 730 ) + " viewing this product currently"
}, 5000);


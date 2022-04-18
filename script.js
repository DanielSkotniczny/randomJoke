const p = document.querySelector('.joke-text')
window.onload = function () {
	fetch('https://api.chucknorris.io/jokes/random')
		.then(response => response.json())
		.then(data => dataReady(data))
}

function dataReady(data) {
	console.log(data.value)
	const joke = data.value
	p.innerText = joke
}

function getParameters() {
	let urlString = document.getElementById("url").value;
	let paramString = urlString.split('?')[1];
	let queryString = new URLSearchParams(paramString);
	for(let pair of queryString.entries()) {
		console.log("Key is:" + pair[0]);
		console.log("Value is:" + pair[1]);
	}
}
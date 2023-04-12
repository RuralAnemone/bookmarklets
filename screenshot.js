const screenshotTarget = document.body;
let w;

let jswindowScript = document.createElement("script");
jswindowScript.setAttribute(
	"src",
	"https://cdn.jsdelivr.net/gh/BinBashBanana/jswindow@master/jswindow.js"
);
document.body.appendChild(jswindowScript);

let jswindowCSS = document.createElement("link");
jswindowCSS.setAttribute(
	"src",
	"https://cdn.jsdelivr.net/gh/BinBashBanana/jswindow@master/jswindow.css"
);
jswindowCSS.setAttribute("rel", "stylesheet");
document.body.appendChild(jswindowCSS);

let h2c = document.createElement("script");
h2c.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.body.appendChild(h2c);

h2c.onload = _ => {
	html2canvas(screenshotTarget).then(canvas => {
		const b64img = canvas.toDataURL("image/png");
		openWindow(b64img);
		console.log(`image url: ${b64img}`);
	});
};

function toggleImage() {
	const imgElem = w.innerWindow.querySelector('img');
	imgElem.setAttribute("style", imgElem.style === "display:none;" ? "display:block;" : "display:none;");
}

function openWindow(image) {
	w = new jswindow({
		title: "screenshot:",
		icon: "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",
	});
	w.innerWindow.innerHTML = `\
<img src=${image} style="display:none;"></img>\
<a href="#" onclick="toggleImage()">view image</a>\
<a href="${image}">open image in new tab</a>\
<button disabled>copy image to clipboard</button>`;

	w.open({ width: 700, height: 300 });
}

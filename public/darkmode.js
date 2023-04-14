const t = setTimeout(timeout, 5000);
let script = document.createElement("script");

if (typeof DarkReader === "undefined") {
	const options = {
		brightness: 100,
		contrast: 90,
		sepia: 0,
	};
	script.setAttribute(
		"src",
		"https://cdn.jsdelivr.net/npm/darkreader/darkreader.min.js"
	);

	script.onload = _ => {
	clearTimeout(t);
	DarkReader.enable(options);
	};

	script.onerror = ev => {
		console.error(ev);
		alert(ev);
	};

	document.body.appendChild(script);
} else if (
	confirm(`either this site already uses Dark Reader or \
you accidentally clicked the bookmarklet twice.\nproceed?`)
) {
	clearTimeout(t);

	DarkReader.enable(options);
} else {
	// catch all cases I guess
	clearTimeout(t);

	console.image("https://i.imgflip.com/6rvsnz.jpg"); // (:
}

function timeout() {
	script.remove();
	const message =
		"rats! the script couldn't load in five seconds! maybe try again?";
	console.log(message);
	alert(message);
}

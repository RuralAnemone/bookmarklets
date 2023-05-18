// boolean condition ? run this if true : run this if false
let format = window.confirm("Download as audio?") ? '&format=251' : '&format=22'

// boolean condition ? run this if true : run this if false
let vid = (window.location.href.indexOf("youtube.com/watch") != -1)
	? location.href
	: window.confirm("attempt to download directly from url?")
		? location.href
		: prompt("video url?")

// change this to your preferred downloader uri, but this one works fine for me
let uri = "https://projectlounge.pw/ytdl/download?url=";

// new tab in case there are errors or the downloader uri isn't a direct download
open(uri + vid + format);

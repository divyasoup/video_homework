// Define variable video
var video = document.getElementById("player1");
video.setAttribute("preload", "auto");

// Load
window.addEventListener("load", function() {
	console.log("Loading finished");
	video.load();
	// turn off looping
	video.loop;
	// turn off autoplay
	video.autoplay = false;

});

// play video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// volume text
	document.getElementById("volume").textContent = (video.volume * 100) + "%";
});

// pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log("Playback Rate (New):" + video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Down");
	video.playbackRate *= 1.1;
	console.log("Playback Rate (New):" + video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
});

// mute
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	video.muted = !video.muted;
});

// volume slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Volume Slider");
	document.getElementById("volume").textContent = (video.volume * 100) + "%"
	console.log("New volume is: " + (video.volume * 100) + "%")

});

// styled
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Switching to old school...")
	video.classList.add("oldSchool")
});

// original
document.querySelector("#original").addEventListener("click", function() {
	console.log("Switching to original...")
	video.classList.remove("oldSchool")
});


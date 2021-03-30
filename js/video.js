var video= document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", 
function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML= video.volume * 100 + "%"
});


document.querySelector("#pause").addEventListener("click", 
function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#vintage").addEventListener("click", 
function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", 
function() {
	console.log("Removing CSS");
	video.classList.remove("oldSchool");
});

document.querySelector("#slower").addEventListener("click", 
function() {
	console.log("Slow Down Video")
	video.playbackRate *= 0.95;
	
});

document.querySelector("#faster").addEventListener("click", 
function() {
	console.log("Speed Up Video")
	video.playbackRate *= 1.05;
	
});

document.querySelector("#slider").addEventListener("click",
function(){
	console.log("Changing Volume")
	console(this.value)
	video.volume=this.value/100
	document.querySelector('#volume').innerHTML=video.volume*100+"%"
})


document.querySelector('#skip').addEventListener("click", function(){
	console.log("Skipping Ahead")
	video.play()
	video.currentTime+=15;
	if(video.currentTime> video.duration){
		video.currentTime= 0 
	}
	console.log(video.currentTime);
	});


document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted == false){
		console.log("Muting")
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else{
		console.log("Unmuting")
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
}
);



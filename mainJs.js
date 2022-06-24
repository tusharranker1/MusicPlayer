// ---------------Targeted Elements-------------------------------------
const playButton = document.getElementById("active-player");
const headingDiv = document.getElementById("mainH1")
const musicPlayerDiv = document.getElementsByClassName("music-player")[0];
const musicWrapper = document.getElementsByClassName("music-wrapper")[0];
const musicPicture = document.getElementById("music-picture")
const baseMusic = document.getElementById("base-music")
const songName = document.getElementById("song-name")
const singerName = document.getElementById("singer-name")
const detailsButton = document.getElementById("detailsBtn");
const prevBtn = document.getElementById("b1")
const playBtn = document.getElementById("b2")
const nextBtn = document.getElementById("b3")
const playPauseIcon = document.getElementsByClassName("boxI")[1]
const musicImage = document.getElementById("music-image")
const audioPlayPause = document.getElementById("songAudio")
const musicController = document.getElementById("music-controller")
const mainContainer = document.getElementsByClassName("main-container")[0]
// --------------variables--------------------------------------------
let flag;
let Maxcount=0;
let count=0;
// --------------Event Listner----------------------------------------

detailsButton.addEventListener("click",getDetails)
playButton.addEventListener("click",playButtonPress)
nextBtn.addEventListener("click",playNextSong)
prevBtn.addEventListener("click",playPrevSong)
playBtn.addEventListener("click",playPauseSong)

// --------------Functions--------------------------------------------

// var audio = new Audio("sounds/crash.mp3");
function playButtonPress()
{
    headingDiv.classList.add("heading-click")
    playButton.style.display="none"
    musicPlayerDiv.style.display="flex"
    musicPlayerDiv.classList.add("music-player-origins")
    flag = false
}

function getDetails()
{
    let buttonInfo = detailsButton.innerHTML
    if(buttonInfo=="Hide"){
        detailsButton.innerHTML="Info"
        musicWrapper.classList.add("music-wrapper-animation2")
    }
    else{
        detailsButton.innerHTML="Hide"
        musicWrapper.classList.remove("music-wrapper-animation2")
        musicWrapper.classList.add("music-wrapper-animation1")
    }
}

function playPauseSong()
{
    let imgSrc = playPauseIcon.getAttribute("src")
    if(imgSrc=="play-pause/play-button.png"){
        playPauseIcon.setAttribute("src","play-pause/pause-button.png")
        audioPlayPause.play()
        headingDiv.classList.remove("heading-click")
        headingDiv.classList.add("set-position")
        headingDiv.classList.add("heading-disco")
    }else{
        playPauseIcon.setAttribute("src","play-pause/play-button.png")
        audioPlayPause.pause()
        headingDiv.classList.remove("heading-disco")
    }
}

function playNextSong()
{
    headingDiv.classList.remove("heading-disco")
    flag = true
    count++;
    if(count>4)return
    musicImage.setAttribute("src","songs-images/imageSong"+count+".jpg")
    audioPlayPause.setAttribute("src","songs-audio/song"+count+".mp3")
    playPauseIcon.setAttribute("src","play-pause/play-button.png")
    Maxcount=Math.max(Maxcount,count)
    changeTheInfo();
}
function playPrevSong()
{
    headingDiv.classList.remove("heading-disco")
    Maxcount--;
    count--;
    if(flag==false || Maxcount<=0)
    {
        musicImage.setAttribute("src","songs-images/xxxtentacion.jpeg")
        songName.innerHTML="Moonlight"
        playPauseIcon.setAttribute("src","play-pause/play-button.png")
        audioPlayPause.setAttribute("src","songs-audio/song"+Maxcount+".mp3")
        singerName.innerHTML="XXXtentacion"
        return
    }
    musicImage.setAttribute("src","songs-images/imageSong"+Maxcount+".jpg")
    audioPlayPause.setAttribute("src","songs-audio/song"+Maxcount+".mp3")
    playPauseIcon.setAttribute("src","play-pause/play-button.png")
    count = Maxcount;
    changeTheInfo()
}

function changeTheInfo()
{
    if(Maxcount==0){
        songName.innerHTML="Moonlight"
        singerName.innerHTML="XXXtentacion"
        musicController.style.backgroundColor="white"
    }
    if(Maxcount==1){
        songName.innerHTML="One Dance"
        singerName.innerHTML="Drake"
        musicController.style.backgroundColor="grey"
    }
    if(Maxcount==2){
        songName.innerHTML="As it Was"
        singerName.innerHTML="Harry Styles"
        musicController.style.backgroundColor="white"
    }
    if(Maxcount==3){
        songName.innerHTML="Sterio Hearts"
        singerName.innerHTML="Gym Class Heroes"
        musicController.style.backgroundColor="grey"
    }
    if(Maxcount==4){
        songName.innerHTML="No Idea"
        singerName.innerHTML="Don Toliver"
        musicController.style.backgroundColor="white"
    }

}
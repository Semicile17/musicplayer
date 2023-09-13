console.log("Welcome To Spotify")
//initializing the variable
let songindex=0;
let audioelement=new Audio('audio1.mp3');
let masterplay=document.querySelector("#masterplay");
let myprogressbar=document.getElementById('myprogressbar');
let songs=[
   { songname: "Beggin'-By Maneskin",filepath:"audio1.mp3",coverpath:"cover1.png"},
   { songname: "Beggin'-By Maneskin",filepath:"audio1.mp3",coverpath:"cover1.png"},
   { songname: "Beggin'-By Maneskin",filepath:"audio1.mp3",coverpath:"cover1.png"},
   { songname: "Beggin'-By Maneskin",filepath:"audio1.mp3",coverpath:"cover1.png"},
   { songname: "Beggin'-By Maneskin",filepath:"audio1.mp3",coverpath:"cover1.png"},
   { songname: "Beggin'-By Maneskin",filepath:"audio1.mp3",coverpath:"cover1.png"},
   { songname: "Beggin'-By Maneskin",filepath:"audio1.mp3",coverpath:"cover1.png"},
   { songname: "Beggin'-By Maneskin",filepath:"audio1.mp3",coverpath:"cover1.png"},
   { songname: "Beggin'-By Maneskin",filepath:"audio1.mp3",coverpath:"cover1.png"},
   { songname: "Beggin'-By Maneskin",filepath:"audio1.mp3",coverpath:"cover1.png"}

]


//audioelement.play();
//handle play/pause click
masterplay.addEventListener('click',()=>{
    console.log("working");
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
    }
})

//Listen to events
myprogressbar.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    //Update Seekbar
})

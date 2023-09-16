console.log("Welcome To Spotify")
//initializing the variable
let songindex=1;

let masterplay=document.querySelector("#masterplay");
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');

audioelement=new Audio('audio1.mp3')
let songitem=Array.from(document.getElementsByClassName('songitem'));
pfor=document.getElementById('pfor');
pback=document.getElementById('pback');

let songs=[
   { songname: "Beggin'-By Maneskin",filepath:"audio1.mp3",coverpath:"cover1.png"},
   { songname: "Dangerously -By Charlie Puth",filepath:"audio2.mp3",coverpath:"cover1.png"},
   { songname: "One call away'-By Charlie Puth",filepath:"audio3.mp3",coverpath:"cover1.png"},
   { songname: "Heather'-By Conan Gray",filepath:"audio4.mp3",coverpath:"cover1.png"},
   { songname: "The Beginning'-By Jhon Legend",filepath:"audio5.mp3",coverpath:"cover1.png"},
   { songname: "Act my age'-By One-Direction",filepath:"audio6.mp3",coverpath:"cover1.png"},
   { songname: "Sparkle'-By RADWIMPS",filepath:"audio7.mp3",coverpath:"cover1.png"},
   { songname: "Katewari Doki'-By RADWIMPS",filepath:"audio8.mp3",coverpath:"cover1.png"},
   { songname: "Constantinople'-By They Might be Giants",filepath:"audio9.mp3",coverpath:"cover1.png"},
   { songname: "Bluebird'-By Ikimonogakari",filepath:"audio10.mp3",coverpath:"cover1.png"}

]



//audioelement.play();
//handle play/pause click
masterplay.addEventListener('click',()=>{
    console.log("working");
    if(audioelement.paused || audioelement.currentTime<=0){
       
        audioelement.play();
        mastersname.innerText=songs[songindex-1].songname;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
       
        audioelement.pause();
        mastersname.innerText=songs[songindex-1].songname;
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }
})

//Listen to events
audioelement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    //Update Seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    
    myprogressbar.value=progress; 
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=(myprogressbar.value*audioelement.duration)/100;
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-play-circle')
        element.classList.remove('fa-pause-circle');
    })

}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays()
        
        songindex=parseInt(e.target.id);
       
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src=`audio${songindex}.mp3`;
       
        audioelement.currentTime=0;
        audioelement.play();
        mastersname.innerText=songs[songindex-1].songname;
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');


    })
})
pfor.addEventListener('click',()=>{
    if(songindex>=10){
        songindex=1;
    }
    else{
        songindex+=1;
    }
   
    audioelement.src=`audio${songindex}.mp3`;
    mastersname.innerText=songs[songindex-1].songname;
    gif.style.opacity=1;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})
pback.addEventListener('click',()=>{
    if(songindex<=1){
        songindex=1;
    }
    else{
        songindex-=1;
    }
   
    audioelement.src=`audio${songindex}.mp3`;
    mastersname.innerText=songs[songindex-1].songname;
    gif.style.opacity=1;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})


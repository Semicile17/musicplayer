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
mode=document.querySelector('.mode');
coverimages=document.querySelector('.coverimages')
coverimages.style.backgroundImage=`url(cover${songindex}.png)`;
coverimages.style.backgroundSize='contain';
coverimages.style.backgroundRepeat='no-repeat';
coverimages.style.backgroundPosition='center';


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
        coverimages.style.backgroundImage=`url(cover${songindex}.png)`;
coverimages.style.backgroundSize='contain';
coverimages.style.backgroundRepeat='no-repeat';
coverimages.style.backgroundPosition='center';
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
    coverimages.style.backgroundImage=`url(cover${songindex}.png)`;
    coverimages.style.backgroundSize='contain';
    coverimages.style.backgroundRepeat='no-repeat';
    coverimages.style.backgroundPosition='center';
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
    coverimages.style.backgroundImage=`url(cover${songindex}.png)`;
coverimages.style.backgroundSize='contain';
coverimages.style.backgroundRepeat='no-repeat';
coverimages.style.backgroundPosition='center';
    audioelement.src=`audio${songindex}.mp3`;
    mastersname.innerText=songs[songindex-1].songname;
    gif.style.opacity=1;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})
let p=0;
mode.addEventListener('click',()=>{
    if(p==0){

    mode.textContent='Light';
    mode.style.backgroundColor='#56e856';
    mode.style.borderColor='black';
    let w=document.getElementsByTagName('BODY')[0];
    let a=document.getElementsByTagName('UL')[0];
    w.style.backgroundColor="azure";
    a.style.backgroundColor="#56e856";
    
    let tex=document.querySelector('#tex');
    tex.style.color='azure';
    
    
    bottom=document.querySelector('.bottom');
    bottom.style.backgroundColor='#56e856';
    document.querySelector('#home').style.color='azure';
    document.querySelector('#about').style.color='azure';
    si1=document.querySelector('.si1');
    si1.style.backgroundColor='#071207';
    si2=document.querySelector('.si2');
    si2.style.backgroundColor='#071207';
    si3=document.querySelector('.si3');
    si3.style.backgroundColor='#071207';
    si4=document.querySelector('.si4');
    si4.style.backgroundColor='#071207';
    si5=document.querySelector('.si5');
    si5.style.backgroundColor='#071207';
    si6=document.querySelector('.si6');
    si6.style.backgroundColor='#071207';
    si7=document.querySelector('.si7');
    si7.style.backgroundColor='#071207';
    si8=document.querySelector('.si8');
    si8.style.backgroundColor='#071207';
    si9=document.querySelector('.si9');
    si9.style.backgroundColor='#071207';
    si10=document.querySelector('.si10');
    si10.style.backgroundColor='#071207';
    let c=document.querySelectorAll('.img');
    c.forEach(img=>{
        img.setAttribute('style','border-color: #56e856');
    })
    let d=document.querySelectorAll('.songitem');
    d.forEach(songitem=>{
        songitem.setAttribute('style','border:1px solid azure ');
        songitem.setAttribute('style','hover{border:5px solid black;}');
    })
    document.querySelector('.container').style.borderColor='#56e856';

   
   
    
    
    p=p+1;
    }
    else{
        mode.textContent='Dark';
        mode.style.backgroundColor='black';
        mode.style.borderColor='azure';
        let w=document.getElementsByTagName('BODY')[0];
        let a=document.getElementsByTagName('UL')[0];
        
        let tex=document.querySelector('#tex');
        tex.style.color='azure';
        
        si1=document.querySelector('.si1');
    si1.style.backgroundColor='#56e856';
    si2=document.querySelector('.si2');
    si2.style.backgroundColor='#56e856';
    si3=document.querySelector('.si3');
    si3.style.backgroundColor='#56e856';
    si4=document.querySelector('.si4');
    si4.style.backgroundColor='#56e856';
    si5=document.querySelector('.si5');
    si5.style.backgroundColor='#56e856';
    si6=document.querySelector('.si6');
    si6.style.backgroundColor='#56e856';
    si7=document.querySelector('.si7');
    si7.style.backgroundColor='#56e856';
    si8=document.querySelector('.si8');
    si8.style.backgroundColor='#56e856';
    si9=document.querySelector('.si9');
    si9.style.backgroundColor='#56e856';
    si10=document.querySelector('.si10');
    si10.style.backgroundColor='#56e856';
        bottom=document.querySelector('.bottom');
        bottom.style.backgroundColor='black';
        document.querySelector('#home').style.color='azure';
        document.querySelector('#about').style.color='azure';
        w.style.backgroundColor="black";
        a.style.backgroundColor="black";
        let c=document.querySelectorAll('.img');
    c.forEach(img=>{
        img.setAttribute('style','border-color: azure');
    })
    let d=document.querySelectorAll('.songitem');
    d.forEach(songitem=>{
        songitem.setAttribute('style','border:1px solid maroon ');
        songitem.setAttribute('style','hover{border:5px solid azure;}');
    })
        p=p-1;
    }

})


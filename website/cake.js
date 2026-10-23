// ===============================
// RED VELVET CAKE V2
// ===============================

const button = document.getElementById("blowButton");
const message = document.getElementById("message");
const flames = document.querySelectorAll(".flame");
const cake = document.querySelector(".cake-wrapper");

let blown = false;

button.addEventListener("click", blowCandles);

function blowCandles(){

if(blown) return;

blown = true;

button.disabled = true;

button.innerHTML = "✨ Making a wish... ✨";

message.innerHTML = "";

// Flames flicker faster

flames.forEach((flame,index)=>{

flame.style.animationDuration = ".18s";

setTimeout(()=>{

flame.classList.add("out");

showSmoke(flame.parentElement);

},500 + index*40);

});

// Dim cake

setTimeout(()=>{

cake.classList.add("dim");

},900);

// Confetti

setTimeout(()=>{

createConfetti();

},1200);

// Final message

setTimeout(()=>{

document.querySelector(".subtitle").innerHTML="";

document.querySelector("h1").innerHTML="";

document.querySelector(".instruction").innerHTML="";

message.innerHTML="💛 Are you ready for your surprise?";

},2400);

// Fade out

setTimeout(()=>{

document.body.style.transition="1.5s";

document.body.style.opacity="0";

},4500);

// Go to next page

setTimeout(()=>{

window.location.href= "letter.html";

},6000);

}

// ===============================
// Smoke
// ===============================

function showSmoke(candle){

for(let i=0;i<3;i++){

const smoke=document.createElement("div");

smoke.className="smoke";

smoke.style.animationDelay=(i*.18)+"s";

candle.appendChild(smoke);

setTimeout(()=>{

smoke.remove();

},2200);

}

}

// ===============================
// Confetti
// ===============================

function createConfetti(){

for(let i=0;i<120;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.width=(5+Math.random()*6)+"px";

confetti.style.height=(8+Math.random()*8)+"px";

confetti.style.animationDuration=(3+Math.random()*2)+"s";

confetti.style.transform=`rotate(${Math.random()*360}deg)`;

confetti.style.background=getRandomColor();

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},5000);

}

}

// ===============================
// Confetti Colors
// ===============================

function getRandomColor(){

const colors=[

"#FFD166",
"#EF476F",
"#F8F9FA",
"#FF8FAB",
"#FFE66D",
"#FFFFFF"

];

return colors[Math.floor(Math.random()*colors.length)];

}
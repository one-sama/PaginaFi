



let s1 = document.getElementById("willy"); 
let s2 = document.getElementById("miniatura"); 
let s3 = document.getElementById("muyBuenas"); 

function playW() { 
  s1.play(); 
} 
function playM() { 
  s2.play(); 
} 

function playMu() { 
  s3.play(); 
} 
document.getElementById("bot1").onclick = playMu;

document.getElementById("bot2").onclick = playM;

document.getElementById("bot3").onclick = playW;





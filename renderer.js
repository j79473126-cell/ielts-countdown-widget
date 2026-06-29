const target = new Date("2026-09-15T09:00:00");

function update(){

const now=new Date();

let diff=target-now;

if(diff<0)return;

const days=Math.floor(diff/86400000);

diff%=86400000;

const hours=Math.floor(diff/3600000);

diff%=3600000;

const minutes=Math.floor(diff/60000);

diff%=60000;

const seconds=Math.floor(diff/1000);

document.getElementById("days").innerText=days+" DAYS";

document.getElementById("time").innerText=

`${hours}h ${minutes}m ${seconds}s`;

}

update();

setInterval(update,1000);

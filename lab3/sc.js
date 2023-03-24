

for(let b=0;b<101;b=b+2)
    console.log(b);

let g = window.prompt("Please enter number one");
let h = window.prompt("Please enter number two");
let z = +g + +h;
document.getElementById("para").innerHTML = "Suma wynosi " + z;

function czas(){
    const szas = new Date();
    let time = szas.getTime();
    const sec = szas.getSeconds();
    const minut = szas.getMinutes();
    const hours = szas.getHours();
    document.getElementById("op").innerHTML = "Czas: " + hours + ":" +minut +":" + sec;
}
setInterval(czas,1000)
let count=0
const unknown = Math.floor(Math.random()*101)
function stone(){
    AN = document.getElementById("polska").value;
    if(AN == unknown){
        alert("Znaleziona została liczba po "+count+" Próbach");
    }
    else if(AN>unknown){
        alert("Szukana liczba jest mniejsza");
        count++;
    }
    else if (AN<unknown){
        alert("Szukana liczba jest większa");
        count++;
    }
    
}
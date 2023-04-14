let announce = window.prompt("Podaj wiek");
let check
if(announce>=18){
    check = "Pełnoletni";
}
    else
    {
    check ="Niepełnoletni";
    }

let whatever = window.alert(check)

let celc = 20;
let fahre = celc*1.8+32;
console.log(fahre)

const tab = [1,8,2,5,3]

const sum = tab.reduce((x,y)=> x+y,0)
console.log(sum)
const even = tab.filter(x=>x%2==0)
console.log(even)
const doubl = tab.map(a=>a*2)
console.log(doubl)

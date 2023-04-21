function silnia(a){
    if(a>1){
        return a * silnia(a-1);
    }
    return 1
}

console.log(silnia(7));

const btns = document.querySelectorAll('button');

let activebtn;

for(let i = 0; i<btns.length;i++){
    const btn = btns[i];
    btn.addEventListener('click', () => {
        if(activebtn){
            console.log(activebtn)
            activebtn.classList.remove('selected');
        }
        btn.classList.add('selected');
        activebtn = btn;
    })
}

const input = document.querySelector('input');
const par = document.querySelector('p')
input.addEventListener('click', ()=>{
    if(par.style.color != "white"){
        par.style.color = "white";
    }
    else{
        par.style.color = "black";
    }
})


let selet = document.getElementById("text")
but = document.getElementById("amon")
amon.addEventListener('click', ()=>{
    if(selet.value != 0){
    ul = document.querySelector("ul")
    const li = document.createElement('li');
    li.textContent = selet.value;
    ul.appendChild(li)
}
}) 

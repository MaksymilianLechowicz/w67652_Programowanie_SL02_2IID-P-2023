function requiredValidation(pole){
    console.log(`[name='${pole.name}'] + span.error`)
    const error = document.querySelector(`[name='${pole.name}'] + span.error`);
   
    console.log(error)
    if(!pole.value || pole.value == ''){
        error.innerHTML = 'Pole jest wymagane !!';
        return false;
    }
    else{
        error.innerHTML = '';
        return true;
    }
}
const form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
}
)

const name = document.querySelector("[name='name']");


name.addEventListener('input', ()=>{
    requiredValidation(name);
})


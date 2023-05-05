function requiredValidation(pole){
    console.log(`[name='${pole.name}'] + span.error`)
    const error = document.querySelector(`[name='${pole.name}'] + span.error`);
   
    console.log(error)
    if(!pole.value || pole.value == ''){
        error.innerHTML = 'Pole jest wymagane !!';
        return false;
    }
    else{
        error.innerHTML = 'ok';
        return true;
    }
}
const form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
}
)
function lengValidation(pole){
    console.log(`[name='${pole.name}']+ span.lenError`)
    const lenError = document.querySelector(`[name='${pole.name}'] + span.error`);
    console.log(lenError)
    if(pole.value.length >= 3){
        lenError.innerHTML = 'ok';
        return true;
    }
    else{
        lenError.innerHTML = 'Długość Imienia lub Naziwska za krótka';
        return false;
    }
}

function emailValidation(pole){
    console.log(`[name='${pole.name}']+ span.EmError`)
    const EmError = document.querySelector(`[name='${pole.name}'] + span.error`);
    console.log(EmError)
    const reges = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    if (reges.test(pole.value)){
        EmError.innerHTML = "ok"
        return true
    }
    else{
        EmError.innerHTML = "Niepoprawy Adres Email"
        return false
    }
}
const name = document.querySelector("[name='name']");
const surname = document.querySelector("[name='surname']");
const email = document.querySelector("[name='email']")
const pass = document.querySelector("[name='pass']")
const sex = document.querySelector("[name='sex']")
const tel = document.querySelector("[name='tel']")
const dat = document.querySelector("[name='dat']")
const country = document.querySelector("[name='country']")
name.addEventListener('input', ()=>{    
    requiredValidation(name);
    lengValidation(name)
})
surname.addEventListener('input', ()=>{
    requiredValidation(surname);
    lengValidation(surname)
})

email.addEventListener('input', ()=>{ 
    requiredValidation(email);
    emailValidation(email);
})
pass.addEventListener('input', ()=>{
    requiredValidation(pass)
})
sex.addEventListener('input', ()=>{
    requiredValidation(sex)
})
tel.addEventListener('input', ()=>{
    requiredValidation(tel)
})
dat.addEventListener('input', ()=>{
    requiredValidation(dat)
})
country.addEventListener('change', ()=>{
    requiredValidation(country)
})



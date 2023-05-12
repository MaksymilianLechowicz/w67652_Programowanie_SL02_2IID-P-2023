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
        lenError.innerHTML = 'Długość Imienia lub Naziwska jest za krótka';
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
function passValidation(pole){
    console.log(`[name='${pole.name}'+span.passError]`)
    const passError = document.querySelector(`[name='${pole.name}']+ span.error`);
    console.log(passError)
    const regexs =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    if (regexs.test(pole.value)){
        passError.innerHTML = "ok"
        return true
    }
    else{
        passError.innerHTML = "Hasło nie posiada wymaganych znaków takich jak np liczby lub znaku specjalnego lub jest za krótkie, hasło powinno być dłuższe niż 6 znaków"
        return false
    }
    }
function compareValidation(pole, pole2){
    console.log(`[name='${pole.name}'+span.pass2Error]`)
    const pass2Error = document.querySelector(`[name='${pole.name}']+ span.error`);
    console.log(pass2Error)
    if (pole.value == pole2.value){
        pass2Error.innerHTML = "ok"
        return true
    }
    else{
        pass2Error.innerHTML = "Hasła różnią się"
    }
}
function telValidation(pole){
    console.log(`[name='${pole.name}'+span.telError]`)
    const telError = document.querySelector(`[name='${pole.name}']+ span.error`);
    console.log(telError)
    const telex = /^[\+]?[(]?[0-9]{9}/
    if(telex.test(pole.value)){
        telError.innerHTML ="ok"
        return true
    }
    else{
        telError.innerHTML = "Niepoprawny numer telefonu"
        return false
    }
}
const name = document.querySelector("[name='name']");
const surname = document.querySelector("[name='surname']");
const email = document.querySelector("[name='email']")
const pass = document.querySelector("[name='pass']")
const pass2 = document.querySelector("[name='pass2']")
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
pass.addEventListener('input',()=>{
    requiredValidation(pass)
    passValidation(pass)
})
pass2.addEventListener('input',()=>{
    compareValidation(pass2, pass)
})
sex.addEventListener('input', ()=>{
    requiredValidation(sex)
})
tel.addEventListener('input', ()=>{
    requiredValidation(tel)
    telValidation(tel)
})
dat.addEventListener('input', ()=>{
    requiredValidation(dat)
})
country.addEventListener('change', ()=>{
    requiredValidation(country)
})
const finish = document.getElementById("Bravo");
form.addEventListener('submit',()=>{
    if(requiredValidation(name) && lengValidation(name) && 
     requiredValidation(surname) && lengValidation(surname) &&
     requiredValidation(email) && emailValidation(email) &&
    requiredValidation(pass) && passValidation(pass) &&
     requiredValidation(sex) && requiredValidation(tel) &&
     telValidation(tel) && requiredValidation(dat) &&
     requiredValidation(country) && compareValidation(pass2, pass)){
    
    finish.innerHTML ="Poprawnie"
}
     else{
    finish.innerHTML = "Nie wypełnione zostały odpowiednie pola"
     }
 })
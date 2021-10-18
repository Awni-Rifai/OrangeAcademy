'use strict'
const email=document.querySelector('input.email');
const mobile=document.querySelector('input.mobile');
const password=document.querySelector('input.password');
const btnSubmit=document.querySelector('.btn-submit');
const checkInput=document.querySelector('#chAgree');

const renderError=function(msg,el,type){
    const err=document.querySelector(`.${type}1`);
    if(err)return;
    const markup=`<span class="mt-2 ${type}1  red text-bold">${msg}</span>`
    el.parentElement.insertAdjacentHTML("beforeend",markup)

}
const removeError=function(el,type){
    const err=document.querySelector(`.${type}1`);
    if(!err)return;
    err.remove()
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateMobile(num){
    return (/077[0-9]{7}/gm).test(num)
}
function validatePassword(pass){
    return (/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])/).test(pass)
}
const checkEmpty=function(type,el){
    try{
        if(el===checkInput){
            if(!el.checked){
                throw new Error(`The ${type} should be checked`)

            }

        }
        else if(el.value==="")throw new Error(`The ${type} shouldn't be empty`)
        if(el.value!==""){
            removeError(el,type);
            
        }
        if(type==="email"){
            if(!validateEmail(el.value)){
                throw new Error ('The email is not valid')

            }

        }
        if(type==="mobile"){
            if(!validateMobile(el.value)){
                throw new Error ('The mobile should be valid')
            };

        }
        if(type==="password"){
            if(!validatePassword(el.value)){
                throw new Error ('A password contains at least eight characters,including at least one number and includes both lower and uppercase letters and special characters, for example')
            };

        }
    
        
    }
    catch(err)
    {
       renderError(err.message,el,type);

    }
    
}
btnSubmit.addEventListener('click',function(){
    checkEmpty('email',email);
    checkEmpty('mobile',mobile);
    checkEmpty('password',password);
    checkEmpty('checkbox',checkInput);
    
})

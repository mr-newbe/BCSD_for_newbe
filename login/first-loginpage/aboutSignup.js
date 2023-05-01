const iname = document.getElementById('iname');
const pname = document.getElementById('pname');
const chname = document.getElementById('chname');
const phone_num = document.getElementById('phone_name');
const st_num = document.getElementById('st_num');


const signup = document.querySelector('#signup');

const cancel = document.getElementById('cancel');

const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function getAllKL(){
    if(re.test(String(iname.value))===false){
        
        alert("wrong imail address");
        
    }
    if(chname.value!==pname.value){
        
        alert("diffrent password");
        
    }
    
    if(st_num.value.length!==10){
        
        alert("wrong studend num!");
        
    }
    
    return 0;
}


cancel.addEventListener('click',function(){window.location.replace("/choice.html")});
signup.addEventListener('click',function(){getAllKL()});




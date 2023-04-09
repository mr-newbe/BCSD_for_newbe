const iname = document.getElementById('iname');
const pname = document.getElementById('pname');
const chname = document.getElementById('chname');
const phone_name = document.getElementById('phone_name');
const st_num = document.getElementById('st_num');


const signup = document.getElementById('signup');
const cancel = document.querySelector('#cancel');


function getAllKL(){
    if(iname.value!=='/^\w(?=@(?=[a-z](?=.(?=com))))/'){
        console.log("1-1");
        alert("1-1");
        return;
    }
    if(chname.value!==pname.value){
        console.log("2-2");
        alert('2-2');
        return;
    }
    if(st_num.value.length!==10){
        console.log("3-3");
        alert('3-3');
        return;
    }


}


cancel.addEventListener('click',function(){window.location.href="choice.html";});
signup.addEventListener('cklck',function(){getAllKL();});




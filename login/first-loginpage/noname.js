const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const  form = document.querySelector('form');
const btn = document.querySelector('button');


form.onsubmit = function(e){
    if(fname.value===''||lname.value===''){
        e.preventDefault();
        alert("You need to fill in both names!");
    }
}


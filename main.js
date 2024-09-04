const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("may pasok pre?");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "denjii";
    }

    if (n.length > 0) {
        alert("ano walang pasok???");
        alert("*/nalongkot");
        alert(':/');
        main.style.display = 'block';
        break;
   }
}
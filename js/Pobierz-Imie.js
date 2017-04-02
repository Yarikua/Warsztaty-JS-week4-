'use strict'


var przyciskSubmit = document.getElementsByTagName('input')[2];

function pobierzDane(e) {
    e.preventDefault();
    console.log (document.getElementsByTagName('input')[0].value)
    console.log (document.getElementsByTagName('input')[1].value)
}

przyciskSubmit.addEventListener('click', pobierzDane);
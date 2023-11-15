'use strict'
import { alg1 } from './Algoritms.js';
console.log("we are alive")

const body = document.querySelector('#website');

const divAlg1 = document.createElement('div');
divAlg1.id = 'alghoritm1';

const h1 = document.createElement('h1');
h1.textContent = "Alghoritm 1";
h1.id = 'alghoritm';
divAlg1.appendChild(h1);

const btn1 = document.createElement('button');
btn1.onclick = alg1;
btn1.id = 'alghoritm';
btn1.innerText = 'click me!';
divAlg1.appendChild(btn1);

body.appendChild(divAlg1); // response and request for sending what alghoritm to do and how much time it did!




// const btn1 = document.createElement('button')
// btn1.onclick() = alg1()
// btn1.id = button1 

// const btn2 = document.createElement('button')
// btn1.onclick() = alg1()
// btn1.id = button2 

// const btn3 = document.createElement('button')
// btn1.onclick() = alg1()
// btn1.id = button3 

// const btn4 = document.createElement('button')
// btn1.onclick() = alg1()
// btn1.id = button4 

// const btn5 = document.createElement('button')
// btn1.onclick() = alg1()
// btn1.id = button5 
// document.open()

//TODO: Create more functions like this
//TODO: Set them in a separate script

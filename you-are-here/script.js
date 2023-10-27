let strings = document.querySelectorAll('span'); 
let string = [];

for (let i = 0; i < strings.length; i++) { 
    strings[i].setAttribute('id', 'string' + i);
    string[i] = document.getElementById('string' + i);
    string[i].classList.add('present');
    string[i].addEventListener('click', () => {
    string[i].classList.remove('present');
    string[i].classList.add('remove');
    });
}  

let backButton = document.getElementById('back-button'); 
function back(){
    window.location='../index.html';
}

let tc = document.querySelector('.text-container')
function invert() {
let remove = document.querySelectorAll('.remove');
let present = document.querySelectorAll('.present');
let body = document.querySelector('body');
let mc = document.querySelector('.matter-container')
body.classList.toggle('filled');
mc.classList.toggle('mc-vis');
for (let i = 0; i < remove.length; i++) { 
	remove[i].classList.toggle('show');
	}
for (let i = 0; i < present.length; i++) { 
	present[i].classList.toggle('hide');
	}
document.documentElement.style.cursor = 'help';
}

let invertButton = document.getElementById('invert-button');
invertButton.addEventListener('click', invert);

let t1 = document.querySelector('.t1');
let printButton = document.getElementById('print-button');
printButton.addEventListener('click', function() {
	invertButton.style.visibility = 'hidden';    
    backButton.style.visibility = 'hidden';
    this.style.visibility = 'hidden';
    tc.style.textAlign = 'left';
    window.print();
    invertButton.style.visibility = 'visible';
    backButton.style.visibility = 'visible';
    this.style.visibility = 'visible';
});

window.onresize = function(){ location.reload(); }

// let message = [
// 'WHAT IS A THEORIST', 'ROGOF',
// 'Witho', 'With', 'Wit', 'Wi', 'W', 'w', '.']
// i = 0
// function animateTitle() {
// i >= message.length - 1 ? (i = 0) : i++,
// (document.title = message[i]),
// setTimeout('animateTitle()', 600)
// }

// animateTitle()

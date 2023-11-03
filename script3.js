function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours}:${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
  const clockElement = document.getElementById("clock");
  clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();


let buttons = document.getElementById('buttons');
let printButton = document.getElementById('print-button');
let mc = document.querySelector('.matter-container');
printButton.addEventListener('click', function() {
    mc.style.textShadow = '0px 0px 0px grey'
    buttons.style.visibility = 'hidden';
    this.style.visibility = 'hidden';
    window.print();
    mc.style.textShadow = '2px 2px 1.5px grey'
    buttons.style.visibility = 'visible';
    this.style.visibility = 'visible';
});

function animateTitle() {
i >= message.length - 1 ? (i = 0) : i++,
(document.title = message[i]),
setTimeout('animateTitle()', 500)
}
let message = [
'WITHOUT', 'WITHOUT', 'W ITHOUT', 'W I THOUT', 'W I T HOUT', 'W I T H OUT', 'W I T H O UT', 'W I T H O U T', 'W I T H O UT', 'W I T H OUT', 'W I T HOUT', 'W I THOUT', 'W ITHOUT', 'WITHOUT' ]
i = 0
animateTitle()
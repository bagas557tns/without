    function updateClock() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const timeString = `${hours}:${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
      
      const clockElement = document.getElementById("clock");
      clockElement.textContent = timeString;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initialize the clock immediately
    updateClock();

let strings = document.querySelectorAll('span'); 
let string = [];

for (let i = 0; i < strings.length; i++) { 
    strings[i].setAttribute('id', 'string' + i);
    string[i] = document.getElementById('string' + i);
    string[i].addEventListener('click', () => {
    string[i].classList.add('subtract');
    });
}  


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
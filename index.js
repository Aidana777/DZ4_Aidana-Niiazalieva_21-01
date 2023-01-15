const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement',);
const cleanBtn = document.querySelector('.cleanBtn');
let countTag = document.querySelector('.count')

incrementBtn.onclick = () => {
    countTag.textContent = +countTag.textContent + 1
    countTag.style.color = 'green';
}

decrementBtn.addEventListener('click', handleClick)
cleanBtn.onclick = () => {
    countTag.textContent = 0
    countTag.style.color = 'black';
}
function handleClick() {
    countTag.textContent = +countTag.textContent - 1
    countTag.style.color = 'red';
    if (countTag.textContent <= 0) {
        countTag.textContent = 0
    }
}

document.querySelector('.box').onmousemove = function(event) {
    event = event || window.event; 
    console.log(event); 
    document.querySelector('.x').innerHTML = event.offsetX;
    document.querySelector('.y').innerHTML = event.offsetY;
}
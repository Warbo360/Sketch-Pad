// Need a function that takes button input of size dimensions and outputs a .createElements() loop and iterates n times n being the axb dimenstions of the sketch pad, each 
// draw box will be its own div, so flexbox with flex-wrap needed when creating the divs with JS manip 

function createCanvas(sizeInput) {
    let canvasContainer = document.querySelector('.rightSideSketchZone');
    for (let i = 0; i < (sizeInput * sizeInput); i++) {
        let individualBox = document.createElement('div');
        individualBox.setAttribute('class','singleBox');
        individualBox.style.width = 600/sizeInput + 'px';
        individualBox.style.height = 600/sizeInput + 'px';

        canvasContainer.appendChild(individualBox);
    }
}

createCanvas(prompt("Input width x height number up to 100 please")); // Calling the above function with the input being a prompt to generate the sketch grid

let singleBox = document.querySelectorAll('.singleBox');
let sketchSize = document.querySelectorAll('.sketchSize');
let drawMode;

sketchSize.forEach(((element) => element.addEventListener('click', function(){
    console.log(element);
    drawMode = element.innerText.toLowerCase();
    if (drawMode === 'clear') {
        for (i = 0; i < singleBox.length; i++ ) {
            singleBox[i].style.backgroundColor = 'white';
        };
    };
})));


function draw(e) {
    e.target.style.backgroundColor = 'black';
};

function erase(e) {
    e.target.style.backgroundColor = 'white';
};

function getRandomInteger(max) {
    return Math.floor(Math.random()*max);
};

function rgb(e) {
    e.target.style.backgroundColor = 'rgb' + '(' + getRandomInteger(255) + ',' + getRandomInteger(255) + ',' + getRandomInteger(255) + ')';
};

for (i = 0; i < singleBox.length; i++ ) {
    singleBox[i].addEventListener('click', function(e) {
        if (drawMode === 'draw') {
            draw(e);
        } else if (drawMode === 'erase') {
            erase(e);
        } else if (drawMode === 'rgb') {
            rgb(e);
        } else {
            alert('Please select a draw option')
        };
    });
};



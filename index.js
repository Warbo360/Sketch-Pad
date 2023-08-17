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

let singleBox = document.querySelectorAll('.singleBox'); // selecting the divs in the drawing area
let sketchSize = document.querySelectorAll('.sketchSize'); // selecting the div that will eventaully hold the various draw modes
let drawMode; // variable that is used to set the drawmode, and if clear is selected loops over each div coloring each white


// Event listener to set draw modes based on buttons selctions and a for loop if the clear option is selected colors all the canvas divs white
sketchSize.forEach(((element) => element.addEventListener('click', function(){
    console.log(element);
    drawMode = element.innerText.toLowerCase();
    if (drawMode === 'clear') {
        for (i = 0; i < singleBox.length; i++ ) {
            singleBox[i].style.backgroundColor = 'white';
        };
    };
})));

// all of the draw modes, random integer function added to generate the random color for the rgb method
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

// variable and eventlistener to track if the mouse is held down and sets the variable to true of false to be used in the for loop below to actually draw in the canvas
let isMouseDown = false;

document.addEventListener('mousedown', function() {
    isMouseDown = true;
});

document.addEventListener('mouseup', function() {
    isMouseDown = false;
})

// if isMouseDown = true, then the for loop fills in a div that has the mouse over it allows to press and hold draw functionality and stops if the button is not held
for (i = 0; i < singleBox.length; i++ ) {
    singleBox[i].addEventListener('pointerover', function(e) {
        if (drawMode === 'draw' && isMouseDown === true) {
            draw(e);
        } else if (drawMode === 'erase' && isMouseDown === true) {
            erase(e);
        } else if (drawMode === 'rgb' && isMouseDown === true) {
            rgb(e);
        } else {
            return;
        };
    });
};
// Need a function that takes button input of size dimensions and outputs a .createElements() loop and iterates n times n being the axb dimenstions of the sketch pad, each 
// draw box will be its own div, so flexbox with flex-wrap needed when creating the divs with JS manip 

let singleBox = document.querySelectorAll('.singleBox'); // selecting the divs in the drawing area

function createCanvas(sizeInput) {
    let canvasContainer = document.querySelector('.rightSideSketchZone');
    for (let i = 0; i < (sizeInput * sizeInput); i++) {
        let individualBox = document.createElement('div');
        individualBox.setAttribute('class','singleBox');
        individualBox.style.width = 600/sizeInput + 'px';
        individualBox.style.height = 600/sizeInput + 'px';

        canvasContainer.appendChild(individualBox);
    };
    singleBox = document.querySelectorAll('.singleBox'); // selecting the divs in the drawing area
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

    // Same as the above loop but changed the event to just a click, and removed the '&& isMouseDown conditional that way clicks in the div fill that individual div as well
    for (i = 0; i < singleBox.length; i++ ) {
        singleBox[i].addEventListener('click', function(e) {
            if (drawMode === 'draw') {
                draw(e);
            } else if (drawMode === 'erase') {
                erase(e);
            } else if (drawMode === 'rgb') {
                rgb(e);
            } else {
                return;
            };
        });
    };
};

createCanvas(prompt("Input width x height number up to 100 please")); // Calling the above function with the input being a prompt to generate the sketch grid

function removeCanvas() {
    for (let i = 0; i < singleBox.length; i++) {
        let box = singleBox[i];
        box.remove();
    }
}


let sketchSize = document.querySelectorAll('.sketchSize'); // selecting the div that will eventaully hold the various draw modes
let gridLinesButton = document.querySelector('#gridlines'); // selecting the gridlines button
let drawMode; // variable that is used to set the drawmode, and if clear is selected loops over each div coloring each white
let gridLinesMode = true; // variable to flip the gridlines on the canvas on and off

// event listener for the gridlines button to either draw or remove the gridlines
gridLinesButton.addEventListener('click', function() {
    if (gridLinesMode === true) {
        removeGridLines();
        gridLinesMode = false;
    } else {
        drawGridLines();
        gridLinesMode = true;
    };
});


// Event listener to set draw modes based on buttons selctions and a for loop if the clear option is selected colors all the canvas divs white
sketchSize.forEach(((element) => element.addEventListener('click', function(){
    drawMode = element.innerText.toLowerCase();
    if (drawMode === 'clear') {
        for (i = 0; i < singleBox.length; i++ ) {
            singleBox[i].style.backgroundColor = 'white';
        };
    };
    if (drawMode === 'canvas size') {
        removeCanvas();
        createCanvas(prompt("Input width x height number up to 100 please"));
    }
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

// defining the function to draw and remove the gridlines of the drawing canvas
function drawGridLines() {
    for (i = 0; i < singleBox.length; i++ ) {
        singleBox[i].style.border = '1px solid black';
    };
};

function removeGridLines() {
    for (i = 0; i < singleBox.length; i++ ) {
        singleBox[i].style.border = 'none';
    };
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

// Same as the above loop but changed the event to just a click, and removed the '&& isMouseDown conditional that way clicks in the div fill that individual div as well
for (i = 0; i < singleBox.length; i++ ) {
    singleBox[i].addEventListener('click', function(e) {
        if (drawMode === 'draw') {
            draw(e);
        } else if (drawMode === 'erase') {
            erase(e);
        } else if (drawMode === 'rgb') {
            rgb(e);
        } else {
            return;
        };
    });
};
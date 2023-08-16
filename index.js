// Need a function that takes button input of size dimensions and outputs a .createElements() loop and iterates n times n being the axb dimenstions of the sketch pad, each 
// draw box will be its own div, so flexbox with flex-wrap needed when creating the divs with JS manip 

let sizeInput = prompt('input canvas size pls'); // outputs string for the variable

function createCanvas(sizeInput) {
    let canvasContainer = document.querySelector('.rightSideSketchZone');
    console.log(typeof sizeInput);
    for (let i = 0; i < (sizeInput * sizeInput); i++) {
        let individualBox = document.createElement('div');
        individualBox.textContent = 'x';
        individualBox.style.width = toString(500/sizeInput) + 'px';
        console.log(individualBox.style.width = 500/sizeInput + 'px');
        individualBox.style.height = toString(500/sizeInput) + 'px';
        console.log(individualBox.style.height = 500/sizeInput + 'px');

        canvasContainer.appendChild(individualBox);
    }
}

// let overallApp = document.querySelector('.overallApp');

// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = '!';
	
// 	overallApp.appendChild(p);
// }


//Generation of grid
const container = document.getElementById("container");
function genDivGrid (number) {
    const gridSize = number;
    const numberOfCells = gridSize * gridSize;

    container.style.setProperty ('--grid-cols', gridSize);
    container.style.setProperty ('--grid-rows', gridSize);

    for (i = 0; i < numberOfCells; i++) {
        const cell = document.createElement('div');
        container.appendChild(cell).className = 'gridCell';
    }

    //Event listeners for hover effect
    const elements = document.getElementsByClassName('gridCell');
    for (i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function(event) {
        let round = Math.round
        let rand = Math.random
        const rgbNumb = 255
        let color = 'rgb(' + round(rand()*rgbNumb) + ',' +  round(rand()*rgbNumb) + ',' +  round(rand()*rgbNumb) +')';
        event.target.style.backgroundColor = color;
    });
}

}

genDivGrid(16);



//Button functionality: clear current grid and prompt user for size of new grid
document.getElementById('clearButton').addEventListener('click', function(event) { 
  while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let newGrid = prompt("Please enter a grid size less than 64");
    genDivGrid(newGrid);
});
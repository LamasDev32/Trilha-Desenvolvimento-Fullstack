let colorBox = document.getElementById('changeColor');

function handleMouseOver() {
    colorBox.style.backgroundColor = '#e74c3c';
    colorBox.style.transition = 'all .3s ease-in-out'
    colorBox.innerHTML = "Mouse em Cima!";
};

function handleMouseOut() {
    colorBox.style.backgroundColor = '#3498db';
    colorBox.style.transition = 'all .3s ease-in-out'
    colorBox.innerHTML = "Passe o mouse aqui!";
}

colorBox.addEventListener('mouseover', handleMouseOver);
colorBox.addEventListener('mouseout', handleMouseOut);
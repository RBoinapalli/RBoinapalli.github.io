let count = 0;

function increaseCount() {
    count++;
    document.querySelector('.counter').textContent = count;
}

function refreshImage() {
    location.reload();
}

function moveSquare() {
    let slider = document.getElementById("slider");
    let square = document.getElementById("square");
    square.style.left = slider.value + '%';
}

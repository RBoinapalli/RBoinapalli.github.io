const drawBtn = document.getElementById("draw-btn");
const starInput = document.getElementById("star-input");
const errorMsg = document.getElementById("error-msg");
const canvas = document.getElementById("canvas");
const starMsg = document.getElementById("star-msg");

drawBtn.addEventListener("click", () => {
    const numStars = parseInt(starInput.value);
    errorMsg.style.display = "none";
    starMsg.style.display = "none";
    canvas.innerHTML = ""; // Clear previous stars

    if (isNaN(numStars) || numStars <= 0) {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Please enter a valid number greater than 0!";
    } else {
        // Draw stars
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement("div");
            star.classList.add("star");
            star.style.top = `${Math.random() * (canvas.clientHeight - 20)}px`;
            star.style.left = `${Math.random() * (canvas.clientWidth - 20)}px`;
            star.setAttribute("data-id", i + 1);

            // When a star is clicked
            star.addEventListener("click", (e) => {
                const starNumber = e.target.getAttribute("data-id");
                starMsg.style.display = "block";
                starMsg.textContent = `You clicked on Star #${starNumber}`;
            });

            canvas.appendChild(star);
        }
    }
});

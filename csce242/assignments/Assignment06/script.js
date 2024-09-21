document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    const arrow = document.querySelector('.arrow');

    // Toggle menu visibility on small screens
    function toggleMenu() {
        if (window.innerWidth <= 600) { // Only apply for small screens
            menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
            arrow.textContent = arrow.textContent === '▼' ? '▲' : '▼';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Make sure the arrow is hidden when the screen is resized to a larger width
    window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
            menuItems.style.display = 'inline'; // Show the menu items in-line on larger screens
            arrow.textContent = '▼'; // Reset arrow
        } else {
            menuItems.style.display = 'none'; // Hide the menu on smaller screens by default
        }
    });

    const colorSliderSection = document.getElementById('colorSlider');
    const pictureChooserSection = document.getElementById('pictureChooser');

    const redSlider = document.getElementById('redSlider');
    const sliderMessage = document.getElementById('sliderMessage');

    // Color slider logic
    redSlider.addEventListener('input', function () {
        const redValue = redSlider.value;
        document.body.style.backgroundColor = `rgb(${redValue}, 0, 0)`;

        if (redValue < 85) {
            sliderMessage.textContent = "This is a dark red!";
        } else if (redValue < 170) {
            sliderMessage.textContent = "This is a medium red!";
        } else {
            sliderMessage.textContent = "This is a bright red!";
        }
    });

    // Toggle between exercises
    document.querySelectorAll('.menu-items li').forEach((item, index) => {
        item.addEventListener('click', () => {
            if (index === 0) {
                colorSliderSection.classList.remove('hidden');
                pictureChooserSection.classList.add('hidden');
            } else {
                pictureChooserSection.classList.remove('hidden');
                colorSliderSection.classList.add('hidden');
            }
        });
    });

    // Picture chooser logic
    const pictureArea = document.getElementById('pictureArea');

    function loadImage(size) {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/${size}`;
        img.alt = "Random Picture";
        pictureArea.innerHTML = '';
        pictureArea.appendChild(img);
    }

    document.getElementById('smallPic').addEventListener('click', () => loadImage(200));
    document.getElementById('mediumPic').addEventListener('click', () => loadImage(400));
    document.getElementById('largePic').addEventListener('click', () => loadImage(600));
});

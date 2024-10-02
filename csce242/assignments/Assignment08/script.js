const images = [
    { src: "images/birthday.jpg", title: "Party Hat", description: "This stick figure is wearing a party hat and celebrating." },
    { src: "images/clown.jpg", title: "Clown", description: "A stick figure with clown nose, ready for performance." },
    { src: "images/rain.jpg", title: "Umbrella Holder", description: "A stick figure holding an umbrella, ready for the rain." },
    { src: "images/read.jpg", title: "Book Reader", description: "A stick figure reading a book, focused and calm." },
    { src: "images/shovel.jpg", title: "Gardener", description: "A stick figure with a shovel, preparing to garden." },
    { src: "images/work.jpg", title: "Laptop User", description: "A stick figure sitting with a laptop, working remotely." }
];

// Array to store image elements
const imageElements = [];

// Function to load images into the container using a loop
const loadImages = () => {
    const container = document.getElementById('imageContainer');
    for (let i = 0; i < images.length; i++) {
        const imageElement = document.createElement('img');
        imageElement.src = images[i].src;
        imageElement.alt = images[i].title;
        imageElement.addEventListener('click', () => displayDescription(i));
        container.appendChild(imageElement);
        imageElements.push(imageElement); // Store the image element in the array
    }
};

// Function to display the description using arrays and if-else
const displayDescription = (index) => {
    const descriptionContainer = document.getElementById('descriptionContainer');
    if (index >= 0 && index < images.length) {
        const selectedImage = images[index];
        descriptionContainer.innerHTML = `
            <h3>${selectedImage.title}</h3>
            <p>${selectedImage.description}</p>
        `;
    } else {
        descriptionContainer.innerHTML = '<p>No description available.</p>';
    }
};

// Load images on page load using an arrow function
window.onload = () => loadImages();

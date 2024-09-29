// JavaScript to handle the array of images and descriptions
const images = [
    { src: "image1.png", title: "Party Hat", description: "This stick figure is wearing a party hat and celebrating." },
    { src: "image2.png", title: "Ballet Dancer", description: "A stick figure ballerina, ready for performance." },
    { src: "image3.png", title: "Umbrella Holder", description: "A stick figure holding an umbrella, ready for the rain." },
    { src: "image4.png", title: "Book Reader", description: "A stick figure reading a book, focused and calm." },
    { src: "image5.png", title: "Gardener", description: "A stick figure with a shovel, preparing to garden." },
    { src: "image6.png", title: "Laptop User", description: "A stick figure sitting with a laptop, working remotely." }
];

// Function to load images into the container
const loadImages = () => {
    const container = document.getElementById('imageContainer');
    images.forEach((img, index) => {
        const imageElement = document.createElement('img');
        imageElement.src = img.src;
        imageElement.alt = img.title;
        imageElement.addEventListener('click', () => displayDescription(index));
        container.appendChild(imageElement);
    });
};

// Function to display the description when an image is clicked
const displayDescription = (index) => {
    const descriptionContainer = document.getElementById('descriptionContainer');
    descriptionContainer.innerHTML = `
        <h3>${images[index].title}</h3>
        <p>${images[index].description}</p>
    `;
};

// Load images on page load
window.onload = loadImages;

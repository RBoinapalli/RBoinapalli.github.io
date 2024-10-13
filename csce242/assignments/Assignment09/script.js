class Bird {
    constructor(name, size, lifespan, food, habitat, fact, imageUrl) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.imageUrl = imageUrl;
    }

    // Returns a section with the bird image and title
    getSection() {
        return `
            <div class="bird-card" onclick="openModal('${this.name}')">
                <h3>${this.name}</h3>
                <img src="${this.imageUrl}" alt="${this.name}">
            </div>`;
    }

    // Returns an expanded view for the modal dialog
    getExpandedSection() {
        return `
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>${this.name}</h2>
                <img src="${this.imageUrl}" alt="${this.name}">
                <p><strong>Size:</strong> ${this.size}</p>
                <p><strong>Lifespan:</strong> ${this.lifespan}</p>
                <p><strong>Food:</strong> ${this.food}</p>
                <p><strong>Habitat:</strong> ${this.habitat}</p>
                <p><strong>Interesting Fact:</strong> ${this.fact}</p>
            </div>`;
    }
}
const birds = [ 
    new Bird("Hummingbird", "2.5 inches", "3-5 years", "Nectar (Sugar water)", "Trees", "They're nicknamed 'Hummers'", "images/Hummingbird.png"),
    new Bird("Blue Jay", "9-12 inches", "7 years", "Nuts, seeds, insects", "Forests", "Blue Jays are great mimics!", "images/Bluejay.png"),
    new Bird("Cardinal", "8-9 inches", "3 years", "Seeds, fruits", "Woodlands", "They sing in the morning!", "images/Cardinal.png"),
    new Bird("Robin", "10 inches", "2 years", "Worms, berries", "Gardens", "Often seen in snowy weather!", "images/Robin.png")
    
];

const birdList = document.getElementById('bird-list');
const modalContent = document.getElementById('modal-content');
const modal = document.getElementById('birdModal');


// Function to open the modal with bird details
function openModal(birdName) {
    const bird = birds.find(b => b.name === birdName);
    modalContent.innerHTML = bird.getExpandedSection();
    modal.style.display = "block";
}

// Function to display the bird list
function displayBirds() {
    birds.forEach(bird => {
        birdList.innerHTML += bird.getSection();
    });
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Initialize the bird display
displayBirds();

// Close modal if user clicks outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

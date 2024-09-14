// Function to open specific tab
function openTab(event, tabName) {
    // Get all elements with class="tab-content" and hide them
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Show the current tab
    document.getElementById(tabName).classList.add("active");
}

// Function to toggle the mobile menu
function toggleMenu() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

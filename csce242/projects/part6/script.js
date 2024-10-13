const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Toggle dropdown content
const toggleDropdown = (element) => {
    const content = element.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
};

// Add event listeners to dropdown buttons
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        toggleDropdown(event.target.parentElement);
    });
});

// Function to toggle job details
const toggleJobDetails = (jobId) => {
    const jobDetails = document.getElementById(jobId);
    jobDetails.style.display = jobDetails.style.display === 'block' ? 'none' : 'block';
};

// Function to open the apply form modal
const openApplyForm = (jobTitle) => {
    const modal = document.getElementById('apply-modal');
    const jobTitleElement = document.getElementById('job-title');
    const positionInput = document.getElementById('position');

    jobTitleElement.textContent = jobTitle;
    positionInput.value = jobTitle;

    modal.style.display = 'flex';
};

// Function to close the apply form modal
const closeModal = () => {
    const modal = document.getElementById('apply-modal');
    modal.style.display = 'none';
};

// Function to submit the application form
const submitApplication = (event) => {
    event.preventDefault();

    const applyModal = document.getElementById('apply-modal');
    const thankYouModal = document.getElementById('thank-you-message');

    applyModal.style.display = 'none';
    thankYouModal.style.display = 'flex';
};

// Function to close the thank-you message
const closeThankYou = () => {
    const thankYouModal = document.getElementById('thank-you-message');
    thankYouModal.style.display = 'none';
};

const getJobs = async () => {
    const url = "httjobs.json"; // Update with the correct path

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showJobs = async () => {
    const jobs = await getJobs();

    jobs.forEach((job) => {
        document.getElementById("jobs-list").append(getJobSection(job));
    });
};

const getJobSection = (job) => {
    const jobDiv = document.createElement("div");
    jobDiv.classList.add("job");
    jobDiv.setAttribute("onclick", `toggleJobDetails('${job.id}')`);

    const img = document.createElement("img");
    img.src = job.image;
    img.alt = `${job.title} Image`;
    jobDiv.append(img);

    const title = document.createElement("h4");
    title.innerHTML = job.title;
    jobDiv.append(title);

    const detailsDiv = document.createElement("div");
    detailsDiv.id = job.id;
    detailsDiv.classList.add("job-details");
    detailsDiv.innerHTML = `<p>${job.description}</p>`;
    
    const applyBtn = document.createElement("button");
    applyBtn.classList.add("apply-btn");
    applyBtn.innerHTML = "Apply";
    applyBtn.onclick = () => openApplyForm(job.applyTitle);
    
    detailsDiv.appendChild(applyBtn);
    jobDiv.appendChild(detailsDiv);

    return jobDiv;
};

const toggleJobDetails = (id) => {
    const detailsDiv = document.getElementById(id);
    detailsDiv.style.display = detailsDiv.style.display === "none" ? "block" : "none";
};

// Call showJobs when the page loads
showJobs();
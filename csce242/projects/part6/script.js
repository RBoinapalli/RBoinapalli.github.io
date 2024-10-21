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
    const url = `https://RBoinapalli.github.io/csce242/projects/part6/jobs.json`; 

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

    //Add image
    const img = document.createElement("img");
    img.src = `https://RBoinapalli.github.io/csce242/projects/part6/images/${job.img}`;
    jobDiv.append(img);

    const title = document.createElement("h4");
    title.innerHTML = job.title;
    jobDiv.append(title);

    const detailsDiv = document.createElement("div");
    detailsDiv.id = job.id;
    detailsDiv.classList.add("job-details");
    detailsDiv.style.display = "none"; // Initially hidden

    // Add description
    const descriptionP = document.createElement("p");
    descriptionP.innerHTML = job.description;
    detailsDiv.appendChild(descriptionP);
    
    // Add skills
    const skillsH5 = document.createElement("h5");
    skillsH5.innerHTML = "Skills:";
    detailsDiv.appendChild(skillsH5);
    
    const skillsUl = document.createElement("ul");
    job.skills.forEach((skill) => {
        const li = document.createElement("li");
        li.innerHTML = skill;
        skillsUl.appendChild(li);
    });
    detailsDiv.appendChild(skillsUl);
    
    // Add salary
    const salaryP = document.createElement("p");
    salaryP.innerHTML = `Salary: ${job.salary}`;
    detailsDiv.appendChild(salaryP);

    // Add location
    const locationP = document.createElement("p");
    locationP.innerHTML = `Location: ${job.location}`;
    detailsDiv.appendChild(locationP);

    // Add apply button
    const applyBtn = document.createElement("button");
    applyBtn.classList.add("apply-btn");
    applyBtn.innerHTML = "Apply";
    applyBtn.onclick = (event) => {
        event.stopPropagation(); // Prevents toggle on button click
        openApplyForm(job.applyTitle);
    };

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

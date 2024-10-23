// Keep track of sections
let sectionCounter = 0;

function addSection(sectionType) {
    const dynamicSections = document.getElementById('dynamic-sections');

    // Create a new section based on the section type
    let sectionHTML = '';
    sectionCounter++;

    if (sectionType === 'education') {
        sectionHTML = `
            <div id="section-${sectionCounter}">
                <h2>Education</h2>
                <label for="school-${sectionCounter}">School</label>
                <input type="text" id="school-${sectionCounter}" placeholder="Enter your school">

                <label for="degree-${sectionCounter}">Degree</label>
                <input type="text" id="degree-${sectionCounter}" placeholder="Enter your degree">

                <label for="year-${sectionCounter}">Year</label>
                <input type="text" id="year-${sectionCounter}" placeholder="Enter the year of graduation">
                <button type="button" onclick="removeSection(${sectionCounter})">Remove Section</button>
            </div>
        `;
    } else if (sectionType === 'experience') {
        sectionHTML = `
            <div id="section-${sectionCounter}">
                <h2>Work Experience</h2>
                <label for="job-${sectionCounter}">Job Title</label>
                <input type="text" id="job-${sectionCounter}" placeholder="Enter your job title">

                <label for="company-${sectionCounter}">Company</label>
                <input type="text" id="company-${sectionCounter}" placeholder="Enter the company name">

                <label for="duration-${sectionCounter}">Duration</label>
                <input type="text" id="duration-${sectionCounter}" placeholder="Enter duration">
                <button type="button" onclick="removeSection(${sectionCounter})">Remove Section</button>
            </div>
        `;
    } else if (sectionType === 'skills') {
        sectionHTML = `
            <div id="section-${sectionCounter}">
                <h2>Skills</h2>
                <label for="skill-${sectionCounter}">Skill</label>
                <input type="text" id="skill-${sectionCounter}" placeholder="Enter a skill">
                <button type="button" onclick="removeSection(${sectionCounter})">Remove Section</button>
            </div>
        `;
    } else if (sectionType === 'projects') {
        sectionHTML = `
            <div id="section-${sectionCounter}">
                <h2>Projects</h2>
                <label for="project-${sectionCounter}">Project Name</label>
                <input type="text" id="project-${sectionCounter}" placeholder="Enter the project name">

                <label for="project-desc-${sectionCounter}">Description</label>
                <textarea id="project-desc-${sectionCounter}" rows="2" placeholder="Enter a short project description"></textarea>
                <button type="button" onclick="removeSection(${sectionCounter})">Remove Section</button>
            </div>
        `;
    }

    dynamicSections.insertAdjacentHTML('beforeend', sectionHTML);
}

function removeSection(sectionId) {
    const section = document.getElementById(`section-${sectionId}`);
    section.remove();
}

// Function to generate the resume preview
function generateResume() {
    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Display the values in the resume preview
    document.getElementById('preview-name').innerText = name;
    document.getElementById('preview-email').innerText = email;
    document.getElementById('preview-phone').innerText = phone;
    document.getElementById('preview-address').innerText = address;

    // Get and display dynamic sections
    const dynamicSections = document.getElementById('dynamic-sections').children;
    let previewSections = '';
    for (let i = 0; i < dynamicSections.length; i++) {
        previewSections += dynamicSections[i].outerHTML;
    }

    document.getElementById('preview-dynamic-sections').innerHTML = previewSections;
}

function changeTemplate() {
  const selectedTemplate = document.getElementById('template-selector').value;
  const resumePreview = document.getElementById('resume-preview');

  // Reset template classes
  resumePreview.className = '';

  // Apply the selected template class
  resumePreview.classList.add(selectedTemplate);
}

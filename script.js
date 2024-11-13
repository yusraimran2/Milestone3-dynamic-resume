var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var firstnameElement = document.getElementById('firstname');
    var lastnameElement = document.getElementById('lastname');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    var educationElement = document.getElementById('education');
    if (firstnameElement && lastnameElement && emailElement && phoneElement && skillsElement && experienceElement && educationElement) {
        var firstname = firstnameElement.value;
        var lastname = lastnameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var education = educationElement.value;
        //create resume output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Firstname:</strong> ".concat(firstname, " </p>\n<p><strong>Lastname:</strong> ").concat(lastname, " </p>\n<p><strong>Email:</strong> ").concat(email, " </p>\n<p><strong>Phone:</strong> ").concat(phone, " </p>\n<p><strong>Skills:</strong> ").concat(skills, " </p>\n\n\n<h3>Experience:</h3>\n<p>").concat(experience, "</p>\n\n<h3>Education:</h3>\n<p>").concat(education, "</p>\n\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements aree miissing');
        }
    }
    else {
        console.error('one or more outputs are missing');
    }
});

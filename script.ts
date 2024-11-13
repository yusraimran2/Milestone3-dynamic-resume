document.getElementById("resumeForm")?.addEventListener('submit',function(event){

   event.preventDefault()

   const  firstnameElement = document.getElementById('firstname') as HTMLInputElement;
   const  lastnameElement = document.getElementById('lastname') as HTMLInputElement;
   const  emailElement = document.getElementById('email') as HTMLInputElement;
   const  phoneElement = document.getElementById('phone') as HTMLInputElement;
   const  skillsElement = document.getElementById('skills') as HTMLInputElement;
   const  experienceElement = document.getElementById('experience') as HTMLInputElement;
   const  educationElement = document.getElementById('education') as HTMLInputElement;
   
   if (firstnameElement && lastnameElement && emailElement && phoneElement && skillsElement && experienceElement && educationElement){
      const firstname = firstnameElement.value;
      const lastname = lastnameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const skills = skillsElement.value;
      const experience = experienceElement.value;
      const education = educationElement.value;

//create resume output
const resumeOutput =`
<h2>Resume</h2>
<p><strong>Firstname:</strong> ${firstname} </p>
<p><strong>Lastname:</strong> ${lastname} </p>
<p><strong>Email:</strong> ${email} </p>
<p><strong>Phone:</strong> ${phone} </p>
<p><strong>Skills:</strong> ${skills} </p>


<h3>Experience:</h3>
<p>${experience}</p>

<h3>Education:</h3>
<p>${education}</p>

`
const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
   resumeOutputElement.innerHTML = resumeOutput
} else{
   console.error('the resume output elements aree miissing');
}
}else{
   console.error('one or more outputs are missing')
}
})
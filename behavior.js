const profile = document.getElementById('profile');
const buttonName = document.getElementById('changeName');
const buttonBackground = document.getElementById('changeBackground');
const buttonDetails = document.getElementById('toggleDetails');

const studentName = document.getElementById('studentName');
const details = document.getElementById('details');


// Change Name
buttonName.addEventListener("click", function() {
    studentName.textContent = "Argedeon Ragot";
});


// Change Background
buttonBackground.addEventListener("click", function() {
    profile.style.backgroundColor = "#ccfbf1";
});


// Show / Hide Details
buttonDetails.addEventListener("click", function() {
    details.classList.toggle("hidden");
});
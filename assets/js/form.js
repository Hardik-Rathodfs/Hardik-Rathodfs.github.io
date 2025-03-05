// Initialize EmailJS with your public key
emailjs.init("hhdp8df5mFNxuhudM");

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get values from the form inputs
  const name = document.getElementById('Name')?.value;
  const email = document.getElementById('email')?.value;
  const message = document.getElementById('message')?.value;

  // Validate input fields
  if (!name || !email || !message) {
    Toastify({
      text: "Please complete the form above",
      backgroundColor: "red",
      duration: 3000,
      gravity: "top", // top or bottom
      position: "center", // left, center or right
    }).showToast();
    return;
  }

  // Disable the submit button to prevent multiple clicks
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;

  // Prepare the data to be sent
  const data = {
    name: name,
    email: email,
    message: message,
    to_email: "hardikrathod9899@gmail.com", // Updated email
  };

  // Send the email using EmailJS
  emailjs.send("service_c8vq8cg", "template_h1hjtk1", data) // Updated service and template IDs
    .then(() => {
      // Enable the submit button again
      submitBtn.disabled = false;
      Toastify({
        text: "Email sent successfully!",
        backgroundColor: "green",
        duration: 3000,
        gravity: "top", // top or bottom
        position: "center", // left, center or right
      }).showToast();

      // Clear form fields
      document.getElementById('Name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('message').value = "";
    })
    .catch((error) => {
      // Enable the submit button again in case of error
      submitBtn.disabled = false;
      console.error("Error in sending email:", error);
      Toastify({
        text: "Error in sending email: " + (error.text || error.message),
        backgroundColor: "red",
        duration: 3000,
        gravity: "top", // top or bottom
        position: "center", // left, center or right
      }).showToast();
    });
});

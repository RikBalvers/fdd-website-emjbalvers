document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    emailjs.init("riiOSxYznBNgDKllb"); // Replace with your EmailJS Public Key

    emailjs.send("service_aqyfp3t", "template_plgpy9e", {
        user_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    })
    .then(
        function (response) {
            alert("Email sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("contact-form").reset(); // Clear form after sending
        },
        function (error) {
            alert("Failed to send email. Try again later.");
            console.log("FAILED...", error);
        }
    );
});
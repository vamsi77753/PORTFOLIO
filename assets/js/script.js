const form = document.querySelector("form");
const submitButton = document.getElementById("contact-btn"); // Use the correct button ID

submitButton.addEventListener("click", async (e) => {
  e.preventDefault(); // Prevent default form submission

  // Client-side validation (optional, add your preferred validation logic here)
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("comment").value;

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Create the email content
  const emailBody = `
  Name: ${name}
  Email: ${email}
  Subject: ${subject}

  Message:
  ${message}
  `;

  try {
    const email = await Email.send({
      // **Security:** Avoid exposing credentials in client-side code.
      // Consider server-side solutions for form submission and email sending.
      // You can temporarily use placeholder values for demonstration purposes:
      Host: "smtp.elasticemail.com", // Replace with your SMTP server host
      Username: "kasireddyvamsi012@gmail.com", // Replace with your email address
      Password: "BF262EF197FD5CEA119972216D06EADDBF75", // Replace with your email password
      To: "kasireddyvamsi012@gmail.com", // Replace with recipient email
      From: "kasireddyvamsi012@gmail.com", // Replace with your email address
      Subject: subject,
      Body: emailBody,
    });

    console.log("Message sent successfully:", email);
    alert("Your message has been sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    alert("There was an error sending your message. Please try again later.");
  }
});

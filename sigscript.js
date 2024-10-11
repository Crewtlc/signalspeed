function validateForm() {
  const dateTime = document.getElementById("dateTime").value;
  const cliName = document.getElementById("cliName").value;
  const locoNo = document.getElementById("locoNo").value;
  const signalAspect = document.getElementById("signalAspect").value;
  const section = document.getElementById("section").value;
  const kmNo = document.getElementById("kmNo").value;
  const speed = document.getElementById("speed").value;

  if (!dateTime || !cliName || !locoNo || !signalAspect || !section || !kmNo || !speed) {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
 const scriptURL = 'https://script.google.com/macros/s/AKfycbyR47VMJFWWzcAlglYR5G1JDXM9aQtXS4uzZu60R6KCSGJx-TDW1i1jE6VaaIPT1D3a/exec';
const form = document.forms['speedTestForm'];
const submitButton = form.querySelector('button[type="submit"]');  // Select the submit button

form.addEventListener('submit', async e => {
  e.preventDefault();  // Prevent the default form submission

  // Disable the submit button to prevent multiple submissions
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  try {
    alert("Wait! Your form is submitting");
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    });

    if (response.ok) {
      alert("Your details have been recorded, thank you.");
      window.location.reload();  // Reload the page after form submission
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error!', error.message);
    alert("An error occurred during form submission. Please try again.");
  } finally {
    // Re-enable the submit button after submission is complete
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
  }
});

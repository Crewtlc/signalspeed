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

// Validate Registration Form
document.getElementById("registerForm").addEventListener("submit", (event) => {
  const idNumber = document.getElementById("idnumber").value;
  if (idNumber.length !== 13 || isNaN(idNumber)) {
    alert("Please enter a valid 13-digit South African ID number.");
    event.preventDefault();
  }
});

// Validate File Upload Form
document.getElementById("uploadForm").addEventListener("submit", (event) => {
  const fileInput = document.getElementById("file");
  const filePath = fileInput.value;
  if (!filePath.endsWith(".mp3")) {
    alert("Only MP3 files are allowed.");
    event.preventDefault();
  }
});

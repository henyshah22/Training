function validateRegister() {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;

  if (!name || !email || !password || !confirm) {
    alert("All fields are required.");
    return false;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return false;
  }

  localStorage.setItem(
    "registeredUser",
    JSON.stringify({ name, email, password })
  );

  window.location.href = "confirm.html";
  return false;
}

function validateLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Both fields are required.");
    return false;
  }

  const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (
    storedUser &&
    storedUser.email === email &&
    storedUser.password === password
  ) {
    window.location.href = "welcome.html";
  } else {
    alert("Invalid credentials");
  }

  return false;
}

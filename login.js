async function login() {

  localStorage.clear();

  const emailOrId = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: emailOrId,
      studentId: emailOrId,
      password: password
    })
  });

  const data = await res.json();

  console.log("FULL LOGIN DATA:", data);

  if (!data.user) {
    alert(data.message || "Login failed");
    return;
  }

  // 🔥 SAVE BRAND NEW USER
  localStorage.setItem("user", JSON.stringify(data.user));

  // 🔥 CHECK SAVED USER
  console.log(
    "SAVED USER:",
    JSON.parse(localStorage.getItem("user"))
  );

  window.location.href = "dashboard.html";
}
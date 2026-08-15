async function login() {
  // ✅ Use ngrok URL
  const API_BASE = 'https://jaqueline-unguileful-aspersively.ngrok-free.dev/api';
  
  localStorage.clear();

  const emailOrId = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_BASE}/auth/login`, {
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

  localStorage.setItem("user", JSON.stringify(data.user));
  console.log("SAVED USER:", JSON.parse(localStorage.getItem("user")));

  window.location.href = "dashboard.html";
}
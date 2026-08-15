async function signup() {
  const formData = new FormData();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const studentClass = document.getElementById("class").value.trim();

  // 🌍 phone system
  const countryCode = document.getElementById("countryCode").value;
  const phoneInput = document.getElementById("phone").value.trim();
  const fullPhone = countryCode + phoneInput;

  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", fullPhone);
  formData.append("password", password);
  formData.append("class", studentClass);

  const file = document.getElementById("profilePic").files[0];
  if (file) formData.append("profilePic", file);

  const res = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.message);
    return;
  }

  // ✅ confirm (OK + Cancel)
  const goLogin = confirm(
    data.message + "\n\n" +
    "📢 Please visit school & pay fee.\n\n" +
    "➡ Go to login page?"
  );

  if (goLogin) {
    window.location.href = "login.html";
  }
}
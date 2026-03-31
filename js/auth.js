console.log("auth.js loaded");

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    localStorage.setItem("role", "admin");
    window.location.href = "admin/dashboard.html";
  } else if (username === "user" && password === "1234") {
    localStorage.setItem("role", "user");
    window.location.href = "user/dashboard.html";
  } else {
    document.getElementById("error").innerText = "帳號或密碼錯誤";
  }
}

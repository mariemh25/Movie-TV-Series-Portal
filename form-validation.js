document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");


  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = this.username.value.trim();
      const email = this.email.value.trim();
      const password = this.password.value;
      const confirmPassword = this.confirmPassword.value;
      const message = document.getElementById("registerMessage");

      if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.style.color = "red";
      } else if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
      } else {
        
        const user = {
          username: username,
          email: email,
          password: password,
          memberSince: new Date().toLocaleString("default", { month: "long", year: "numeric" })
        };
        localStorage.setItem("user", JSON.stringify(user));

        message.textContent = "Registration successful!";
        message.style.color = "green";
        setTimeout(() => window.location.href = "profile.html", 1500);
      }
    });
  }


  if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.email.value.trim();
    const password = this.password.value;
    const message = document.getElementById("loginMessage");

    if (!email || !password) {
      message.textContent = "Please fill out all fields.";
      message.style.color = "red";
    } else {
      message.textContent = "Login successful!";
      message.style.color = "green";

      const user = {
        username: email.split("@")[0],
        email: email,
        memberSince: "May 2025"
      };

      localStorage.setItem("loggedInUser", JSON.stringify(user));

      setTimeout(() => window.location.href = "profile.html", 1000);
    }
  });
}
});

localStorage.setItem("user", JSON.stringify({
  username: "MariemHelmy",
  email: "mariemh636@gmail.com",
  since: "May 2025"
}));

 function showRegister() {
      document.getElementById("register-box").classList.remove("hidden");
      document.getElementById("login-box").classList.add("hidden");
    }

    function showLogin() {
      document.getElementById("login-box").classList.remove("hidden");
      document.getElementById("register-box").classList.add("hidden");
    }

    function register() {
      const username = document.getElementById("reg-username").value.trim();
      const password = document.getElementById("reg-password").value.trim();

      if (username === "" || password === "") {
        alert("Please fill in all fields!");
        return;
      }

      if (localStorage.getItem(username)) {
        alert("User already exists!");
        return;
      }

      localStorage.setItem(username, password);
      alert("Registration successful! Please login.");
      showLogin();
    }

    function login() {
      const username = document.getElementById("login-username").value.trim();
      const password = document.getElementById("login-password").value.trim();

      const storedPassword = localStorage.getItem(username);

      if (storedPassword && storedPassword === password) {
        document.getElementById("login-box").classList.add("hidden");
        document.getElementById("register-box").classList.add("hidden");
        document.getElementById("welcome-box").classList.remove("hidden");
        document.getElementById("user-display").innerText = username;
      } else {
        alert("Invalid username or password!");
      }
    }

    function logout() {
      document.getElementById("welcome-box").classList.add("hidden");
      showLogin();
    }
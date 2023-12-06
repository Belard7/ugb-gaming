document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.card-front');
    const signupForm = document.querySelector('.card-back');
  
    function toggleForms() {
      loginForm.classList.toggle('active');
      signupForm.classList.toggle('active');
    }
  
    document.getElementById('reg-log').addEventListener('change', function() {
      toggleForms();
    });
  
    // Registro de usuario
    document.getElementById('registerButton').addEventListener('click', function() {
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      if (fullName && email && password) {
        const userData = { fullName, email, password };
        localStorage.setItem('userData', JSON.stringify(userData));
  
        // Limpiar los campos después de registrar
        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
      }
    });
  
    // Inicio de sesión
    document.getElementById('loginButton').addEventListener('click', function() {
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
      if (email && password) {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
  
        if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
          alert('Inicio de sesión exitoso');
        } else {
          alert('Credenciales incorrectas');
        }
      }
    });
  });
  
const auth = firebase.auth();
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const messageEl = document.getElementById('message'); // Guardar referencia

// Comprobar si los elementos existen antes de añadir listeners (buena práctica)
if (loginBtn && registerBtn && messageEl) {
  loginBtn.addEventListener('click', () => {
    messageEl.classList.remove('show'); // Ocultar mensaje anterior
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      messageEl.textContent = 'Por favor, introduce correo y contraseña.';
      messageEl.classList.add('show');
      return;
    }

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = 'home.html';
      })
      .catch(err => {
        console.error("Error de inicio de sesión:", err);
        // Personalizar mensajes de error comunes de Firebase Auth
        switch (err.code) {
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            messageEl.textContent = 'Correo electrónico o contraseña incorrectos.';
            break;
          case 'auth/invalid-email':
            messageEl.textContent = 'El formato del correo electrónico no es válido.';
            break;
          default:
            messageEl.textContent = 'Error al iniciar sesión. Inténtalo de nuevo.';
        }
        messageEl.classList.add('show');
      });
  });

  registerBtn.addEventListener('click', () => {
    messageEl.classList.remove('show'); // Ocultar mensaje anterior
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      messageEl.textContent = 'Por favor, introduce correo y contraseña para registrarte.';
      messageEl.classList.add('show');
      return;
    }
    if (password.length < 6) {
        messageEl.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        messageEl.classList.add('show');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = 'home.html';
      })
      .catch(err => {
        console.error("Error de registro:", err);
        switch (err.code) {
          case 'auth/email-already-in-use':
            messageEl.textContent = 'Este correo electrónico ya está registrado.';
            break;
          case 'auth/invalid-email':
            messageEl.textContent = 'El formato del correo electrónico no es válido.';
            break;
          case 'auth/weak-password':
            messageEl.textContent = 'La contraseña es demasiado débil.';
            break;
          default:
            messageEl.textContent = 'Error al registrarse. Inténtalo de nuevo.';
        }
        messageEl.classList.add('show');
      });
  });
}
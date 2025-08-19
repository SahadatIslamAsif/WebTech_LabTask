const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const strengthMessage = document.getElementById('strengthMessage');
const matchMessage = document.getElementById('matchMessage');

password.addEventListener('input', () => {
  const val = password.value;
  if (val.length < 6) {
    strengthMessage.textContent = 'Password too short';
    strengthMessage.className = 'message error';
  } else if (!/[A-Z]/.test(val) || !/[0-9]/.test(val)) {
    strengthMessage.textContent = 'Include at least one number and one uppercase letter';
    strengthMessage.className = 'message error';
  } else {
    strengthMessage.textContent = 'Strong password';
    strengthMessage.className = 'message success';
  }
});

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value !== password.value) {
    matchMessage.textContent = "Passwords don't match";
    matchMessage.className = 'message error';
  } else {
    matchMessage.textContent = "Passwords match";
    matchMessage.className = 'message success';
  }
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
  if (
    strengthMessage.classList.contains('error') ||
    matchMessage.classList.contains('error')
  ) {
    e.preventDefault();
    alert('Fix errors before submitting');
  }
});

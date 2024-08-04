function check() {
    const password = document.getElementById('password').value;
    const strength = document.getElementById('strength');
    const result = get(password);
  
    strength.textContent = `Strength: ${result.message}`;
    strength.className = '';
    strength.classList.add(result.class);
  }
  
  function get(password) {
    let result = { message: 'Weak', class: 'weak' };
    if (password.length > 8) {
      result.message = 'Medium';
      result.class = 'medium';
    }
    if (password.length > 12 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#\$%\^&\*]/.test(password)) {
      result.message = 'Strong';
      result.class = 'strong';
    }
    return result;
}  
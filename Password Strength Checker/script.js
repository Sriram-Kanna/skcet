function check()
{
    const password = document.getElementById('password').value;
    const strength = document.getElementById('strength');
    const length = document.getElementById('length');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const number = document.getElementById('number');
    const special = document.getElementById('special');

    const result = get(password);

    strength.textContent = `Strength: ${result.message}`;
    strength.className = '';
    strength.classList.add(result.class);

    updateClass(length, password.length >= 12);
    updateClass(uppercase, /[A-Z]/.test(password));
    updateClass(lowercase, /[a-z]/.test(password));
    updateClass(number, /[0-9]/.test(password));
    updateClass(special, /[!@#\$%\^&\*(),.?":{}|<>]/.test(password));
}

function get(password) 
{
    let result = {message: 'Weak', class: 'weak'};
    if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#\$%\^&\*(),.?":{}|<>]/.test(password)) 
    {
        result.message = 'Strong';
        result.class = 'strong';
    } 
    else if (password.length >= 8) 
    {
        result.message = 'Medium';
        result.class = 'medium';
    }
    return result;
}

function updateClass(element, isValid) 
{
    element.className = isValid ? 'valid' : 'invalid';
}
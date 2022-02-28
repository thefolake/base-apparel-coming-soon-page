window.onload = () => {
    const email = document.querySelector('.email');
    const form = document.querySelector('.form');
    const errorEmail = document.querySelector('.invalid-email-message');
    const errorIcon = document.querySelector('.error-icon');

    form.addEventListener('submit', e => {
        if(email.value){
            const regexMatch = /\S+@\S+\.\S+/.test(email.value);
            if (regexMatch) {
                errorEmail.textContent = '';
                errorIcon.style.display = 'none';
            } else {
                e.preventDefault();
                errorEmail.textContent = 'Please provide a valid email';
                errorIcon.style.display = 'block';
            }
        } else {
            e.preventDefault();
            errorEmail.textContent = "Please provide a valid email";
            errorIcon.style.display = 'block';
        }
    });
}
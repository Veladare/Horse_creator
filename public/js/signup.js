const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/signup-success');
            console.log('user created')
        } else {

            alert("invalid email or password (must be 8 characters)");
        }
    }
};


document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
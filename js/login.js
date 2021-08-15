document.getElementById('login-btn').addEventListener('click', function () {
    const emailfield = document.getElementById('user-email');
    const userEmail = emailfield.value;
    const passwordfield = document.getElementById('user-password');
    const userPassword = passwordfield.value;
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
})
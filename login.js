document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hier kannst du die gespeicherten Benutzer prüfen
    const validUsername = 'benutzer';
    const validPassword = 'passwort123';

    if (username === validUsername && password === validPassword) {
        alert('Anmeldung erfolgreich!');
        // Weiterleitung zu einer anderen Seite, z.B. "dashboard.html"
        window.location.href = 'dashboard.html';
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.classList.remove('hidden');
    }
});

const signInForm = document.getElementById('signInForm');
const signOutForm = document.getElementById('signOutForm');
const logList = document.getElementById('logList');

signInForm.addEventListener('submit', signIn);
signOutForm.addEventListener('submit', signOut);

function signIn(event) {
    event.preventDefault();
    const name = document.getElementById('signInName').value;
    logEvent(name, 'Signed In');
    signInForm.reset();
}

function signOut(event) {
    event.preventDefault();
    const name = document.getElementById('signOutName').value;
    logEvent(name, 'Signed Out');
    signOutForm.reset();
}

function logEvent(name, action) {
    const logEntry = document.createElement('li');
    logEntry.textContent = `${name} - ${action} at ${new Date().toLocaleTimeString()}`;
    logList.appendChild(logEntry);
}

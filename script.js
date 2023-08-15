// Get form elements
const eventForm = document.getElementById('eventForm');
const logList = document.getElementById('logList');

// Get input elements
const nameInput = document.getElementById('name');
const idNumberInput = document.getElementById('idNumber');
const departmentInput = document.getElementById('department');

// Get button elements
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

// Add event listeners to buttons
signInBtn.addEventListener('click', () => logEvent('Signed In'));
signOutBtn.addEventListener('click', () => logEvent('Signed Out'));

function logEvent(action) {
    const name = nameInput.value;
    const idNumber = idNumberInput.value;
    const department = departmentInput.value;

    if (name && idNumber && department) {
        const logEntry = document.createElement('li');
        logEntry.textContent = `${name} (ID: ${idNumber}) - ${action} from ${department} department at ${new Date().toLocaleTimeString()}`;
        logList.appendChild(logEntry);

        // Clear input fields
        nameInput.value = '';
        idNumberInput.value = '';
        departmentInput.value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

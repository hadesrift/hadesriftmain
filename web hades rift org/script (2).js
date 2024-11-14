// Background movement effect
document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.background');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    background.style.transform = `translate(-${x * 10}px, -${y * 10}px)`;
});

// Open/Close Login Modal
function openLoginModal() {
    document.getElementById('adminLoginModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('adminLoginModal').style.display = 'none';
    document.getElementById('errorMsg').textContent = '';
    document.getElementById('adminPassword').value = '';
}

// Show/Hide Password
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('adminPassword');
    const toggleButton = document.getElementById('togglePassword');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show';
    }
}

// Password Validation
function validatePassword() {
    const password = document.getElementById('adminPassword').value;
    if (password === 'vsk') {
        sessionStorage.setItem('isAdmin', 'true');
        closeModal();
        openAdminPanel();
    } else {
        document.getElementById('errorMsg').textContent = 'Incorrect password';
    }
}

// Open Admin Panel
function openAdminPanel() {
    document.getElementById('adminPanel').style.display = 'flex';
}

// Close Admin Panel and Clear Session
function closeAdminPanel() {
    sessionStorage.removeItem('isAdmin');
    document.getElementById('adminPanel').style.display = 'none';
    closeModal();
}

// File Upload
function uploadContent() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const contentArea = document.getElementById('uploadedContent');
        const fileElement = document.createElement('div');
        fileElement.textContent = `Uploaded File: ${file.name}`;
        contentArea.appendChild(fileElement);
    }
}

// Add Text
function addText() {
    const textInput = document.getElementById('textInput').value;
    if (textInput) {
        const contentArea = document.getElementById('uploadedContent');
        const textElement = document.createElement('p');
        textElement.textContent = textInput;
        contentArea.appendChild(textElement);
    }
}

// Change Background Color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Upload Background Image
function uploadBackgroundImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.body.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

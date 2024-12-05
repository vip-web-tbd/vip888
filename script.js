document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
    if (username === 'VIP007' && password === '12345678i') {
        alert('Login successful');
        window.location.href = 'ssr.html'; // เปลี่ยนหน้าไปยัง "dashboard.html"
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});

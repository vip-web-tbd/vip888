function savePasswordDate() {
    const currentDate = new Date();
    localStorage.setItem('passwordCreationDate', currentDate.toString());
}

// ฟังก์ชันเพื่อตรวจสอบว่ารหัสผ่านหมดอายุหรือยัง
function isPasswordExpired() {
    const passwordCreationDate = new Date(localStorage.getItem('passwordCreationDate'));
    const currentDate = new Date();
    const oneMonthInMillis = 30 * 24 * 60 * 60 * 1000; // 30 วันในหน่วยมิลลิวินาที
    return (currentDate - passwordCreationDate) > oneMonthInMillis;
}

// ฟังก์ชันจำลองการเข้าสู่ระบบ
function login(username, password) {
    if (
        (username === 'VIP007' && password === '12345678i') //||
        //(username === 'VIP001' && password === '12345678q') //||
        //(username === 'VIP002' && password === '12345678w')
    ) {
        if (isPasswordExpired()) {
            alert('รหัสผ่านของคุณหมดอายุแล้ว ซื้อรหัสผ่านใหม่ที่ Discord😘');
            // ทำการเปลี่ยนรหัสผ่าน หรือเปลี่ยนเส้นทางไปยังหน้าที่ให้เปลี่ยนรหัสผ่าน
            // สำหรับความง่ายในการอธิบาย จะหยุดการทำงานที่นี่
            return;
        } else {
            alert('เข้าสู่ระบบสำเร็จ');
            window.location.href = 'ssr.html';
        }
    } else {
        document.getElementById('error-message').innerText = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
    }
}

// เพิ่ม Event Listener สำหรับการส่งฟอร์ม
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // บันทึกวันที่สร้างรหัสผ่านครั้งแรกเมื่อผู้ใช้เข้าสู่ระบบด้วยรหัสผ่านที่ถูกต้อง
    if (
        (username === 'VIP007' && password === '12345678i') //||
        //(username === 'VIP001' && password === '12345678q') //||
        //(username === 'VIP002' && password === '12345678w')
    ) {
        if (!localStorage.getItem('passwordCreationDate')) {
            savePasswordDate();
        }
    }

    // พยายามเข้าสู่ระบบ
    login(username, password);
});

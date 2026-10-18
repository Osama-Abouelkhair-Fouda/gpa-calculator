function calculateGPA() {
    const grades = document.querySelectorAll('.grade');
    let total = 0;
    let count = 0;
    let hasError = false;

    grades.forEach(input => {
        // إذا كان الحقل فارغاً، نتخطاه
        if (input.value === "") return;

        const val = parseFloat(input.value);

        // التحقق مما إذا كان الرقم خارج النطاق الصحيح (من 0 إلى 4)
        if (val < 0 || val > 4) {
            hasError = true;
            return;
        }

        if (!isNaN(val)) {
            total += val;
            count++;
        }
    });

    // إذا وُجد رقم خطأ، نظهر رسالة تنبيه ونوقف الحساب
    if (hasError) {
        document.getElementById('result').innerHTML = "<span style='color:red;'>Error: Points must be between 0 and 4.0!</span>";
        return;
    }

    if (count === 0) {
        document.getElementById('result').innerText = "Please enter at least one grade!";
        return;
    }

    const gpa = (total / count).toFixed(2);
    let status = "";

    if (gpa >= 3.5) status = "Excellent (Honors)";
    else if (gpa >= 3.0) status = "Very Good";
    else if (gpa >= 2.5) status = "Good";
    else status = "Pass / Needs Improvement";

    document.getElementById('result').innerHTML = `GPA: <span style="color:#e63946">${gpa} / 4.0</span><br><small>Status: ${status}</small>`;
}
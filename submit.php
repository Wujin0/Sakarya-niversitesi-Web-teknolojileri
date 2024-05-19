<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri alın
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    // Form verilerini doğrulayın
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Verilerinizi işleyin veya saklayın
        echo "Adınız: " . htmlspecialchars($name) . "<br>";
        echo "E-posta Adresiniz: " . htmlspecialchars($email) . "<br>";
        echo "Mesajınız: " . htmlspecialchars($message) . "<br>";
    } else {
        echo "Lütfen tüm alanları doldurun.";
    }
} else {
    echo "Form gönderilmedi.";
}
?>

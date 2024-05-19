<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen kullanıcı adı ve şifre değerlerini alın
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı ve şifreyi kontrol edin
    if ($username === 'g231210376@sakarya.edu.tr' && $password === 'g231210376') {
        // Kullanıcıyı index.html sayfasına yönlendirin
        header('Location: index.html');
        exit; // Yönlendirmeden sonra scripti sonlandırın
    } else {
        // Başarısız giriş durumunda kullanıcıyı login sayfasına geri yönlendirin
        header('Location: login.html');
        exit;
    }
} else {
    // Sayfa doğrudan erişilirse kullanıcıyı login sayfasına geri yönlendirin
    header('Location: login.html');
    exit;
}
?>

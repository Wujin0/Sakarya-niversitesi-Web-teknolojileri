function showLongInfo() {
    document.getElementById('longInfo').style.display = 'block';
}

function showHobbyInfo(hobbyId) {
    var hobbies = document.getElementsByClassName('hobby-info-hobilerim');
    for (var i = 0; i < hobbies.length; i++) {
        hobbies[i].style.display = 'none';
    }
    document.getElementById(hobbyId).style.display = 'block';
}



/* form script */

function validateForm(event) {
    event.preventDefault(); // Formun submit işlemini durdur

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Lütfen tüm alanları doldurun!');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        alert('Geçerli bir e-posta adresi girin!');
        return;
    }

    document.getElementById('contact-form').submit();
}


/* famework*/


$(document).ready(function() {
    $('#sendWithJQuery').click(function() {
        // Form verilerini alın
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Form kontrolü
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Lütfen tüm alanları doldurun!');
            return false;
        }

        // E-posta formatı kontrolü
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            alert('Geçerli bir e-posta adresi girin!');
            return false;
        }

        // Axios ile gönderim işlemi
        axios.post('submit.php', {
            name: name,
            email: email,
            message: message
        })
        .then(function(response) {
            alert('Mesaj başarıyla gönderildi.');
            console.log(response.data);
        })
        .catch(function(error) {
            alert('Mesaj gönderilirken bir hata oluştu.');
            console.log(error);
        });
    });
});

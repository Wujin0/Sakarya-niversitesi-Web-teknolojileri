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



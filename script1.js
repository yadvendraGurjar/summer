function tot1() {
    var username = document.getElementById('username').value;

    // if (username.trim() !== '') {
    //     alert('Welcome, ' + username + '!');
    // } else {
    //     alert('Please enter your name.');
    // }
    
    window.location.href = 'p2.html?data=' + encodeURIComponent(username);
}


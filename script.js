let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
function redirectToLogin() {
    window.location.href = 'login.html'; // Redirect to login page
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');

    if (isLoggedIn && username) {
        document.getElementById('loginButton').disabled = true; // Disable login button
        document.getElementById('usernameDisplay').innerText = `${username}`;
        document.getElementById('usernameDisplay').style.display = 'block'; // Show username
    } else {
        document.getElementById('loginButton').disabled = false; // Ensure button is enabled if not logged in
        document.getElementById('usernameDisplay').style.display = 'none'; // Hide username if not logged in
    }
}

// Call the checkLoginStatus function on page load
checkLoginStatus();
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
  document.getElementById('tnc-title').addEventListener('click', function() {
    var content = document.getElementById('tnc-content');
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});
function sendMessage() {
    alert('Send successfully!');
}

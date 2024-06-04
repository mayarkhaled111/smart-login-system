var logoutBtn = document.getElementById('logoutBtn');
var hello = document.getElementById('hello');
var array = JSON.parse(localStorage.getItem('info'))
hello.innerHTML = `Welcome ${localStorage.getItem('username')}`

logoutBtn.onclick = function(){
    window.location.href = 'index.html'
}
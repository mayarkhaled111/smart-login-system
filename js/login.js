var username = document.getElementById('username')
var userPass = document.getElementById('userPass')
var error = document.getElementById('error')
var loginBtn = document.getElementById('login')
var userArr = JSON.parse(localStorage.getItem('info'))

var logoutBtn = document.getElementById('logoutBtn');
var hello = document.getElementById('hello');

function login(){
    for(i=0; i<userArr.length; i++){
        if(username.value == userArr[i].uEmail && userPass.value == userArr[i].uPass){
            window.location.href = 'home.html'
            error.classList.replace('d-block','d-none')
            localStorage.setItem('username',userArr[i].uName)

        } else{
            error.classList.replace('d-none','d-block')
        }
    }
}
loginBtn.onclick = function(){
    login();
}
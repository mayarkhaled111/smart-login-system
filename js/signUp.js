var uname = document.getElementById('uname');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var signUpBtn = document.getElementById('signUp-btn');
var check = document.getElementById('check');
var users = [];

if (localStorage.getItem('info') == null) {
    users = [];
} else {
    users = JSON.parse(localStorage.getItem('info'));
}

function addUser() {
    if(validation(uname) && validation(email) && validation(pass)){
        var user = {
            uName: uname.value,
            uEmail: email.value,
            uPass: pass.value,
        };
        users.push(user);
        localStorage.setItem('info', JSON.stringify(users));
    }
}

function checkUser() {
    if (localStorage.getItem('info') != null) {
        var userExists = false;
        for (var i = 0; i < users.length; i++) {
            if (uname.value == users[i].uName || email.value == users[i].uEmail || pass.value == users[i].uPass) {
                userExists = true;
                break;
            }
        }
        if (userExists) {
            check.innerHTML = `<span class='text-danger'>email already exists</span>`;
        } else {
            addUser();
            check.innerHTML = `<span class='success'>Success</span>`;
        }
    } else {
        addUser();
        check.innerHTML = `<span class='success'>Success</span>`;
    }
}

signUpBtn.onclick = function() {
    checkUser();
};

function validation(ele){
    var Regex = {
      uname: /^[a-zA-Z0-9-]{5,}$/,
      email: /^[a-zA-Z0-9-]+\@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/,
      pass: /^[a-zA-Z-]{5,}[0-9]{1,}$/,
    }
    if(Regex[ele.id].test(ele.value)){
      ele.classList.add('is-valid');
      ele.classList.remove('is-invalid');
      ele.nextElementSibling.classList.replace('d-block','d-none')
      return true;
    } else{
      ele.classList.add('is-invalid');
      ele.classList.remove('is-valid');
      ele.nextElementSibling.classList.replace('d-none','d-block')
      return false;
    }
}
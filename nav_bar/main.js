const toogleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

const id = document.getElementById('id-field');
const pswd = document.getElementById('pswd-field');
const login = document.getElementById('login-btn');

login.addEventListener('click', () => {
    if(id.value == "") {
        alert('아이디를 입력해 주세요!');
    }

    else if(pswd.value == "") {
        alert("비밀번호를 입력해 주세요!");
    }

    else {
        alert("로그인 성공!");
        window.location.href="Home.html";
    }
});

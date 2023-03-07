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

function check() {
    var joinid = document.getElementById("join_id");
    var joinpswd = document.getElementById("join_pswd");
    var joinpswd2 = document.getElementById("join_pswd2");
    var joinname = document.getElementById("name");
    var joinphone = document.getElementById("phone");

    if(joinid.value == "") {
        alert("아이디를 입력하세요");
        id.focus();
        return false;
    }
    
    else if(joinpswd.value == "") {
        alert("비밀번호를 입력하세요");
        joinpswd.focus();
        return false;
    }

    else if(joinpswd.value != joinpswd2.value) {
        alert("비밀번호가 일치하지 않습니다");
        joinpswd2.focus();
        return false;
    }

    else if(joinname.value == "") {
        alert("이름을 입력하세요");
        joinname.focus();
        return false;
    }
    else if(joinphone.value == "") {
        alert("전화번호를 입력하세요");
        joinnphone.focus();
        return false;
    }
    else {
        alert("회원가입이 완료되었습니다!");
        window.location.href="Home.html";
        submit();
    }
};
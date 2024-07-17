console.log('Hello RKO');
document.getElementById('submit').addEventListener('click', function loginpass(){
    const loginid = document.getElementById('login');
    const loginvalue = loginid.value;

    const passwordid = document.getElementById('password');
    const passwordvalue = passwordid.value;

    if(loginvalue === 'web@yahoo.com' && passwordvalue === '1234'){
        window.location.href = 'service.html';
    }

    else{
        alert('Try Again.. Wrong Email or Password');
    }
})


document.getElementById('code_btn').onclick = function(){
    let btn = document.getElementById('password');
    // let imgDom = document.getElementById('code_btn').style.backgroundImage;
    if(btn.type == 'password'){
        btn.type = 'text';
        document.getElementById('code_btn').style.backgroundImage = "url('img/look.svg')";
    }else{
        btn.type = 'password';
        document.getElementById('code_btn').style.backgroundImage = "url('img/unlook.svg')";
    }
}
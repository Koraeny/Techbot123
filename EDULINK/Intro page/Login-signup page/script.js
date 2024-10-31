


$(document).ready(()=> {
    $('.lg-switch-text border-btm').on('click', function(e){
        e.preventDefault();
        console.log("Log-in button clicked");
        $('.login-form').removeClass('d-none');
        $('.sign-upform').addClass('d-none');

        $('.lg-switch-text border-btm').addClass('border-btm');
        $('.sn-switch-text').removeClass('border-btm');
    });

    $('.sn-switch-text').on('click', function(e){
        e.preventDefault();
        console.log("Sign-up button clicked");
        $('.login-form').addClass('d-none');
        $('.sign-upform').removeClass('d-none');

        $('.lg-switch-text border-btm').removeClass('border-btm');
        $('.sn-switch-text').addClass('border-btm');
    });
});

clearTimeout(30);
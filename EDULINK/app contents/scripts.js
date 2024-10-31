$(document).ready(()=> {
    $('.all-courses-switch-text border-btm').on('click', function(e){
        e.preventDefault();
        console.log("allcourses button clicked");
        $('.allcourses').removeClass('d-none');
        $('.mycourses').addClass('d-none');

        $('.all-courses-switch-text-border-btm').addClass('border-btm');
        $('.my-courses-switch-text').removeClass('border-btm');
    });

    $('.my-courses-switch-text').on('click', function(e){
        e.preventDefault();
        console.log("My courses button clicked");
        $('.allcourses').addClass('d-none');
        $('.mycourses').removeClass('d-none');

        $('.all-courses-switch-text-border-btm').removeClass('border-btm');
        $('.my-courses-switch-text').addClass('border-btm');
    });
});
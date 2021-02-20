$(document).ready(function(){
    $("#resources a").css("color", "whitesmoke");
    $("body").addClass("no-scroll-horz");
    $(".jump-to-mooc").click(function(){
        //wait 1ms to allow browser to jump down before rebounding
        setTimeout(function(){
            let pos = $(document).scrollTop();
            $(document).scrollTop(pos - getReboundScrollPosition());
            $("#mooc-wrapper").css("background-color", "#ebe859"); //yellow
            setTimeout(function(){
                $("#mooc-wrapper").css("transition", "1.5s");
                $("#mooc-wrapper").css("background-color", "#3A3A3A"); //var(--black)
            }, 250);
            $("#mooc-wrapper").css("transition", "0s");
        }, 1);
    });
});

function getReboundScrollPosition(){
    return innerHeight / 2;
}

//initialize animate on scroll
AOS.init({
    duration: 700
});
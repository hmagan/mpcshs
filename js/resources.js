function getReboundScrollPosition(){
    return innerHeight / 2;
}

$(document).ready(function(){
    //add indicator on navbar
    $("#resources").addClass("nav-button-highlight");
    $(".jump-to-mooc").click(function(){
        //wait 1ms to allow browser to jump down before rebounding
        setTimeout(function(){
            let pos = $(document).scrollTop();
            //scrolls to middle of page
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
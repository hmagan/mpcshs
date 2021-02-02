function copyOnClick(selector){
    //make new clipboard object
    let clipboard = new ClipboardJS(selector, {
        text: function(){
            //copy string directly to clipboard
            return selector.innerHTML;
        }
    });
}

$(document).ready(function(){
    //add indicator on navbar
    $("#contact").addClass("nav-button-highlight");
    $(".copy-on-click").click(function(){
        copyOnClick(this);
    });
    //must trigger click or else it requires two clicks to copy (idk either but it works??)
    $(".copy-on-click").trigger("click");
    $(".copy-on-click").click(function(){
        $(this).css("background-color", "var(--mp-green)");
    });
});
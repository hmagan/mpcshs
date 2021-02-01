function copyOnClick(){
    //use getElementsByClassName bc ClipboardJS requires an HTMLCollection
    let elem = document.getElementsByClassName("copy-on-click");
    let text = $(this);
    let idx = -1;
    for(let i = 0; i < elem.length; i++){
        for(let j = 0; j < text.length; j++){
            if(elem[i].innerHTML === text[j].innerHTML)
                idx = i;
                break;
        }
    }
    console.log(idx);
    let clipboard = new ClipboardJS(elem, {
        text: function(){
            return elem[idx].innerHTML;
        }
    });
    console.log("<=======================================>");
}

$(document).ready(function(){
    $("#contact").addClass("nav-button-highlight");
    //have to click twice for some reason fix later
    $(".copy-on-click").click(copyOnClick);
});
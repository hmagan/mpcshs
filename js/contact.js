$(document).ready(function(){
    $("#contact a").css("color", "whitesmoke");
    $(".copy-on-click").click(function(){
        copyOnClick(this);
    });
    //must trigger click or else it requires two clicks to copy (idk either but it works??)
    $(".copy-on-click").trigger("click");
    $(".copy-on-click").click(function(){
        let elem = $(this)[0];
        elem.parentNode.getElementsByClassName("copy-text")[0].textContent = "Copied!";
        elem.style.borderColor = "yellow";
        setTimeout(function(){
            elem.style.borderColor = "var(--mp-green)";
            elem.parentNode.getElementsByClassName("copy-text")[0].textContent = "Copy";
        }, 1000);
    });
    let fadeIn, popup, opacity;
    $(".copy-on-click").mouseenter(function(){
        popup = $(this)[0].parentNode.getElementsByClassName("copy-text")[0];
        opacity = 0.0;
        fadeIn = setInterval(function(){
            if(opacity < 1){
                opacity += 0.01
                popup.style.opacity = opacity;
            }
        }, 4);
    }).mouseout(function(){
        popup.style.opacity = 0.0;
        popup.textContent = "Copy";
        clearInterval(fadeIn);
    });
});

function copyOnClick(selector){
    let clipboard = new ClipboardJS(selector, {
        text: function(){
            //copy string directly to clipboard without "Copied!" appended to the end
            return selector.textContent.substring(0, selector.textContent.length - 7);
        }
    });
}
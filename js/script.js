function sendEmail() {
    // split email
    sE = ["luan_malaquias", "outlook", ".com"]
    var subject = document.getElementById("subject").value
    var message = document.getElementById("message").value
    window.location.href = "mailto:" + sE[0] + "@" + sE[1] + sE[2] + "?Subject=" + subject + "&body=" + message;

    document.getElementById("subject").value = ""
    document.getElementById("message").value = ""
}

function deactiveVanillaTilt(){
    if (/iPhone|webOS|Android|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var tiltList = document.getElementsByClassName("img-projeto")
        document.getElementById("canvas") .style = 'display: none !important';
        for (var i = 0; i < tiltList.length; i++) {
            tiltList[i].vanillaTilt.destroy();
        }
    }
}

function changeAnimationState(){
    cb = document.getElementById('cb-animacao')
    if(cb.checked){
        document.getElementById("canvas") .style = 'display: block !important';
    } else {
        document.getElementById("canvas") .style = 'display: none !important';
    }
}

var $targetLeft = $('.anim'),
    animationStart = 'anim-start'
    offset = $(window).height() * 3/4;

function animeScroll(){
    var documentTop = $(document).scrollTop();
    $targetLeft.each(function(){
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset){
            $(this).addClass(animationStart);
        } else {
            $(this).removeClass(animationStart);
        }
    })

    if(documentTop > offset){
        document.getElementById('float-contact').style = "display: flex !important"
    }else{
        document.getElementById('float-contact').style = "display: none !important"
    }
}

$(document).scroll(function(){
    animeScroll();
})

deactiveVanillaTilt()
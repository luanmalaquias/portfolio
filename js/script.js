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
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var tiltList = document.getElementsByClassName("img-projeto")
        for (var i = 0; i < tiltList.length; i++) {
            tiltList[i].vanillaTilt.destroy();
        }
    }
}
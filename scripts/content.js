window.addEventListener('load', function() {
    const anchors  = document.getElementsByTagName("a");
    for (i = 0; i < anchors.length; i++) {
        if (anchors[i].innerText === 'hide') {
            anchors[i].click();
        }
    }
})
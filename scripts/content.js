window.addEventListener('load', function() {
    const anchors = document.getElementsByTagName("a");
    let counter = 0;

    for (let i = anchors.length -1; i >= 0 ; i--) {
        if (anchors[i].innerText === 'hide') {
            setTimeout(function() {
                    anchors[i].click();
            }, counter++ * 1000);
        }
    }
});

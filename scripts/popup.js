document.addEventListener('DOMContentLoaded', function () {
    var openTabLink = document.getElementById('openTabLink');

    openTabLink.addEventListener('click', function () {
        chrome.tabs.create({ url: "https://old.reddit.com/r/all/??" });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var openTabLink = document.getElementById('openTabLink');

    openTabLink.addEventListener('click', function () {
        chrome.tabs.create({ url: "https://old.reddit.com/r/all/??" });
    });


    const enableFeature1Checkbox = document.getElementById('annoying');
    const enableFeature2Checkbox = document.getElementById('bad_anime');
    const enableFeature6Checkbox = document.getElementById('celebrity');

    // Load settings from storage and update checkboxes
    chrome.storage.sync.get(['annoying', 'bad_anime', 'celebrity'], function (settings) {
        enableFeature1Checkbox.checked = settings.annoying;
        enableFeature2Checkbox.checked = settings.bad_anime;
        enableFeature6Checkbox.checked = settings.celebrity;
    });

    // Listen for checkbox changes and update settings
    enableFeature1Checkbox.addEventListener('change', function () {
        chrome.storage.sync.set({ annoying: enableFeature1Checkbox.checked });
    });

    enableFeature2Checkbox.addEventListener('change', function () {
        chrome.storage.sync.set({ bad_anime: enableFeature2Checkbox.checked });
    });

    enableFeature6Checkbox.addEventListener('change', function () {
        chrome.storage.sync.set({ celebrity: enableFeature6Checkbox.checked });
    });
});

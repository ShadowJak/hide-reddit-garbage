document.addEventListener('DOMContentLoaded', function () {
    var openTabLink = document.getElementById('openTabLink');

    openTabLink.addEventListener('click', function () {
        chrome.tabs.create({ url: "https://old.reddit.com/r/all/??" });
    });


    const enableFeature1Checkbox = document.getElementById('enableFeature1');
    const enableFeature2Checkbox = document.getElementById('enableFeature2');
    const enableFeature6Checkbox = document.getElementById('enableFeature6');

    // Load settings from storage and update checkboxes
    chrome.storage.sync.get(['enableFeature1', 'enableFeature2', 'enableFeature6'], function (settings) {
        enableFeature1Checkbox.checked = settings.enableFeature1;
        enableFeature2Checkbox.checked = settings.enableFeature2;
        enableFeature6Checkbox.checked = settings.enableFeature6;
    });

    // Listen for checkbox changes and update settings
    enableFeature1Checkbox.addEventListener('change', function () {
        chrome.storage.sync.set({ enableFeature1: enableFeature1Checkbox.checked });
    });

    enableFeature2Checkbox.addEventListener('change', function () {
        chrome.storage.sync.set({ enableFeature2: enableFeature2Checkbox.checked });
    });

    enableFeature6Checkbox.addEventListener('change', function () {
        chrome.storage.sync.set({ enableFeature6: enableFeature6Checkbox.checked });
    });
});

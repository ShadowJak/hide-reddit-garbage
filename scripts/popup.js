document.addEventListener('DOMContentLoaded', function () {
    var openTabLink = document.getElementById('openTabLink');

    openTabLink.addEventListener('click', function () {
        chrome.tabs.create({ url: "https://old.reddit.com/r/all/??" });
    });

    // Request urlArrays from background script
    chrome.runtime.sendMessage({ message: "getUrlArrays" }, function (response) {
        if (response && response.urlArrays) {
            const urlArrays = response.urlArrays;

            // Dynamically generate checkboxes based on storage settings
            const checkboxContainer = document.getElementById('checkboxContainer');

            Object.keys(urlArrays).forEach(key => {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = key;

                const label = document.createElement('label');
                label.htmlFor = key;
                label.appendChild(document.createTextNode(`Enable ${key}`));

                checkboxContainer.appendChild(checkbox);
                checkboxContainer.appendChild(label);

                // Load settings from storage and update checkboxes
                chrome.storage.sync.get(key, function (settings) {
                    if (settings[key] !== undefined) {
                        checkbox.checked = settings[key];
                    }
                });

                // Listen for checkbox changes and update settings
                checkbox.addEventListener('change', function () {
                    const update = {};
                    update[key] = checkbox.checked;
                    chrome.storage.sync.set(update);
                });
            });
        } else {
            console.error("Invalid response from background script:", response);
        }
    });
});

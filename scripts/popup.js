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

            // Create a table for better organization
            const table = document.createElement('table');
            table.style.width = '100%'; // Set the table width

            Object.keys(urlArrays).forEach(key => {
                const row = table.insertRow();

                // Checkbox cell
                const checkboxCell = row.insertCell(0);
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = key;
                checkboxCell.appendChild(checkbox);

                // Label cell
                const labelCell = row.insertCell(1);
                const label = document.createElement('label');
                label.htmlFor = key;
                label.appendChild(document.createTextNode(`Enable ${key}`));
                labelCell.appendChild(label);

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

            checkboxContainer.appendChild(table);
        } else {
            console.error("Invalid response from background script:", response);
        }
    });
});

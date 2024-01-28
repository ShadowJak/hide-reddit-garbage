document.addEventListener('DOMContentLoaded', function () {
    var openTabLink = document.getElementById('openTabLink');

    openTabLink.addEventListener('click', function () {
        chrome.tabs.create({ url: "https://old.reddit.com/r/all/??" });
    });

    chrome.runtime.sendMessage({ message: "getUrlArrays" }, function (response) {
        if (response && response.urlArrays) {
            const urlArrays = response.urlArrays;
            const checkboxContainer = document.getElementById('checkboxContainer');
            const table = document.createElement('table');
            table.style.width = '100%';

            const wordsRow = table.insertRow();
            const wordsCheckboxCell = wordsRow.insertCell(0);
            const wordsCheckbox = document.createElement('input');
            wordsCheckbox.type = 'checkbox';
            wordsCheckbox.id = 'bannedWords';
            wordsCheckboxCell.appendChild(wordsCheckbox);

            const wordsLabelCell = wordsRow.insertCell(1);
            const wordsLabel = document.createElement('label');
            wordsLabel.htmlFor = 'bannedWords';
            wordsLabel.appendChild(document.createTextNode(`Hide Endless Tragedy`));
            wordsLabel.appendChild(document.createElement("br"));
            wordsLabel.appendChild(document.createTextNode('\u00A0\u00A0\u00A0'));
            wordsLabel.appendChild(document.createTextNode(`from r/All`));

            wordsLabelCell.appendChild(wordsLabel);

            // This needs to be improved
            chrome.storage.sync.get('bannedWords', function (settings) {
                if (settings['bannedWords'] !== undefined) {
                    wordsCheckbox.checked = settings['bannedWords'];
                }
            });

            wordsCheckbox.addEventListener('change', function () {
                const update = {};
                update['bannedWords'] = wordsCheckbox.checked;
                chrome.storage.sync.set(update);
            });

            Object.keys(urlArrays).forEach(key => {
                const row = table.insertRow();
                const checkboxCell = row.insertCell(0);
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = key;
                checkboxCell.appendChild(checkbox);

                const labelCell = row.insertCell(1);
                const label = document.createElement('label');
                label.htmlFor = key;
                const labelText = key.replace(/_/g, ' ');
                label.appendChild(document.createTextNode(`Hide ${labelText}`));
                labelCell.appendChild(label);

                chrome.storage.sync.get(key, function (settings) {
                    if (settings[key] !== undefined) {
                        checkbox.checked = settings[key];
                    }
                });

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

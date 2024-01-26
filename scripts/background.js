const defaultSettings = {
    enableFeature1: true,
    enableFeature2: false,
    enableFeature6: true,
};

chrome.storage.sync.get(defaultSettings, function (settings) {
    const extensionSettings = settings || defaultSettings;

    for (const key in defaultSettings) {
        if (defaultSettings.hasOwnProperty(key) && extensionSettings[key] === undefined) {
            extensionSettings[key] = defaultSettings[key];
        }
    }

    chrome.storage.sync.set(extensionSettings);
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let key in changes) {
        if (changes.hasOwnProperty(key)) {
            chrome.storage.sync.get(key, function (setting) {
                const newValue = setting[key];
                chrome.storage.sync.set({ [key]: newValue });
            });
        }
    }
});

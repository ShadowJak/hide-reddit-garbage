if (!document.querySelector('.recover-password')) {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    overlay.style.zIndex = "9999";

    const message = document.createElement("h1");
    message.innerHTML = "Hide Reddit Garbage is running in this tab.";
    message.style.color = "white";
    message.style.fontWeight = "bold";
    message.style.position = "absolute";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    overlay.appendChild(message);

    document.body.appendChild(overlay);

    function performLoopAndNavigate(websites) {
        const anchors = document.getElementsByTagName("a");
        const regex = /^https:\/\/old\.reddit\.com\/r\/all\/\?+$/;
        let counter = 0;

        if (regex.test(window.location.href)) {
            for (let i = anchors.length - 1; i >= 0; i--) {
                if (anchors[i].innerText === 'hide' && anchors[i].href === 'javascript:void(0)') {
                    const closestTopMatterDiv = anchors[i].closest("div.top-matter");
                    if (closestTopMatterDiv) {
                        const titleP = closestTopMatterDiv.querySelector("p.title");
                        const nestedAnchor = titleP ? titleP.querySelector("a") : null;
                        if (nestedAnchor) {
                            chrome.storage.sync.get('bannedWords', function (settings) {
                                if (settings['bannedWords'] === true) {
                                    for (const word of bannedWords) {
                                        if (nestedAnchor.innerText.toLowerCase().includes(word)) {
                                            setTimeout(function () {
                                                anchors[i].click();
                                            }, counter++ * 1000);
                                            break;
                                        }
                                    }
                                }
                            })
                        }
                    }
                }
            }

        } else {
            let hideCounter = 0;
            let hideIndex = -1;
            for (let i = 0; i < anchors.length; i++) {
                const anchor = anchors[i];

                if (anchor.innerText.toLowerCase() === "hide") {
                    hideCounter++;

                    if (hideCounter === 6) {
                        hideIndex = i;
                        break;
                    }
                }
            }

            let looper = hideIndex === -1 ? anchors.length : hideIndex;
            for (let i = looper - 1; i >= 0; i--) {
                if (anchors[i].innerText === 'hide') {
                    setTimeout(function () {
                        anchors[i].click();
                    }, counter++ * 1000);
                }
            }
        }

        let nextSiteIndex = websites.indexOf(window.location.href) + 1;
        nextSiteIndex = nextSiteIndex < websites.length ? nextSiteIndex : 0;

        if (nextSiteIndex < websites.length) {
            setTimeout(function () {
                window.location.href = websites[nextSiteIndex];
            }, counter++ * 1000);
        }
    }

    const bannedWords = [
        "ukrain",
        'russi',
        'lays off',
        'layoff',
        'school shoot',
        'mass shoot'
    ];

    const tempSubredditArray = [];
    let urlArrays = null;
    let rAllUrl = "https://old.reddit.com/r/all/??";

    chrome.runtime.sendMessage({ message: "getUrlArrays" }, function (response) {
        if (response && response.urlArrays) {
            urlArrays = response.urlArrays;
            chrome.storage.sync.get(null, function (data) {
                for (const key in data) {
                    if (data[key] && urlArrays.hasOwnProperty(key)) {
                        tempSubredditArray.push(...urlArrays[key])
                    }
                }

                const subredditSet = new Set(tempSubredditArray);
                const subredditsToHideUnsorted = Array.from(subredditSet);
                const subredditsToHide = subredditsToHideUnsorted.sort((a,b) => b.localeCompare(a));

                let spliceOffset = 0;

                for (let i = 0; i < subredditsToHide.length; i += 10) {
                    subredditsToHide.splice(i + spliceOffset, 0, rAllUrl);
                    spliceOffset++;
                    rAllUrl = rAllUrl + "?";
                }

                performLoopAndNavigate(subredditsToHide);
            });

        } else {
            console.error("Invalid response from background script:", response);
        }
    });

}
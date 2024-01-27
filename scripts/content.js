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
    message.textContent = "Hide Reddit Garbage is running in this tab.";
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
                if (anchors[i].innerText === 'hide') {
                    const closestTopMatterDiv = anchors[i].closest("div.top-matter");
                    if (closestTopMatterDiv) {
                        const titleP = closestTopMatterDiv.querySelector("p.title");
                        const nestedAnchor = titleP ? titleP.querySelector("a") : null;
                        if (nestedAnchor) {
                            for (const word of bannedWords) {
                                if (nestedAnchor.innerText.toLowerCase().includes(word)) {
                                    setTimeout(function () {
                                        anchors[i].click();
                                    }, counter++ * 1000);
                                    break;
                                }
                            }
                        }
                    }
                }
            }

        } else {
            const maxLen = 550
            let looper = anchors.length < maxLen ? anchors.length : maxLen;
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
        'russ',
        'lays off',
        'layoff'
    ];


    const tempSubredditArray = [];
    let urlArrays = null;
    let rAllUrl = "https://old.reddit.com/r/all/??";

    chrome.runtime.sendMessage({ message: "getUrlArrays" }, function (response) {
        if (response && response.urlArrays) {
            // console.log('response.urlArrays', response.urlArrays)
            urlArrays = response.urlArrays;
            // console.log('urlArrays', urlArrays)
            chrome.storage.sync.get(null, function (data) {
                console.log(4444, data);
                for (const key in data) {
                    if (data[key] && urlArrays.hasOwnProperty(key)) {
                        tempSubredditArray.push(...urlArrays[key])
                    }
                }
                const subredditSet = new Set(tempSubredditArray);
                const subredditsToHide = Array.from(subredditSet);
                console.log(5555, subredditsToHide)

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

    // console.log('outside urlArrays', urlArrays)


    // chrome.storage.sync.get(null, function (data) {
    //     console.log(4444, data);
    //     for (const key in data) {
    //         if (data[key] && urlArrays.hasOwnProperty(key)) {
    //             tempSubredditArray.push(...urlArrays[key])
    //         }
    //     }
    // });

    // const subredditSet = new Set(tempSubredditArray);
    // const subredditsToHide = Array.from(subredditSet);
    // console.log(5555, subredditsToHide)

    // let spliceOffset = 0;
    // for (let i = 0; i < subredditsToHide.length; i += 10) {
    //     subredditsToHide.splice(i + spliceOffset, 0, rAllUrl);
    //     spliceOffset++;
    //     rAllUrl = rAllUrl + "?";
    // }

    // chrome.storage.sync.get(['enableFeature1', 'enableFeature2'], function (settings) {
    //     if (settings.enableFeature1) {
    //         // performLoopAndNavigate(subredditsToHide);
    //         console.log(9999)
    //     }

    //     if (settings.enableFeature2) {
    //         // Perform actions for feature2
    //     }
    // });

    // performLoopAndNavigate(subredditsToHide);

}
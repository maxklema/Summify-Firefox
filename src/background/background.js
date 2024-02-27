// src/background/background.js

browser.action.onClicked.addListener((tab) => {
    browser.scripting.executeScript({
        target: {tabId: tab.id},
        files: ["dist/bundle.js", "src/content/grabWebURL.js", "dist/bundle2.js"],
        allFrames: true
    });
});

browser.runtime.onMessage.addListener(function(request, sender, sendResponce) {

    if (request.action === 'updatePopup') {

        //update HTML content!
        browser.action.setPopup({ popup: 'src/popup/summify.html'});

    }

});



var enabled = false;
var myButton = document.getElementById('toggle');

chrome.storage.local.get('enabled', data => {
    enabled = !!data.enabled;
    myButton.textContent = enabled ? 'Enabled' : 'Disabled';
});

myButton.onclick = () => {
    enabled = !enabled;
    myButton.textContent = enabled ? 'Enabled' : 'Disabled';
    chrome.storage.local.set({enabled:enabled});
};

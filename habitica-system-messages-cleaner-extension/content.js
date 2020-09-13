function hideMsgs() {
  var elements = document.querySelectorAll('div.card');
  for (var i = 0, l = elements.length; i < l; i++) {
    subElement = elements[i].querySelector(':scope div.card-body');
    if (subElement.firstChild.tagName != 'A') {
      elements[i].style.display = "none";
    }
  }
}

chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
        setTimeout(hideMsgs, 2000);
    } else {
        //it is disabled
    }
});

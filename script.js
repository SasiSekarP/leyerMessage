'use strict'

let messageBoxEl = document.getElementById('messageBox');

function clickMe() {
    messageBoxEl.classList.replace('hideMessage', 'showMessage');
    document.querySelector('.layer').classList.add('showLayer');
    
    setTimeout(closeIt, 5000);
}

function closeIt() {
    messageBoxEl.classList.replace('showMessage', 'hideMessage')
    document.querySelector('.layer').classList.remove('showLayer')
}

document.addEventListener('click', e => {
    let clickEvent = e.target.classList.contains('layer');
    if (clickEvent) {
        closeIt()
    }
})
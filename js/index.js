const footer = document.getElementById('emojis');

function thirdEmojiSet() {
    footer.innerHTML = '🅱️🅾️🅾️🅿️';
};

function updateEmojis() {
    footer.innerHTML = '🚵‍♂️🧗🏌️';
    footer.addEventListener('click', thirdEmojiSet);
};



footer.addEventListener('click', updateEmojis);
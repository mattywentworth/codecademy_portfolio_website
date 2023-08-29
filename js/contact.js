/* Code to generate a semi-random email address and expose it on the Contact page */

const randomEmail = () => {
    const emailFirstName = ['ashley', 'sarah', 'jennifer', 'elizabeth', 'mary', 'heather', 'hannah', 'mike', 'jason', 'steve', 'bob'];
    const randEmailNum = Math.floor(Math.random() * 10000 + 1);
    const emailService = ['@gmail.com', '@yahoo.com', '@msn.com', '@mindspring.com', '@aol.com', '@hotmail.com', '@outlook.com'];
    const randFirstNameIndex = Math.floor(Math.random() * emailFirstName.length);
    const randEmailServiceIndex = Math.floor(Math.random() * emailService.length);
    const randEmailFirstName = emailFirstName[randFirstNameIndex];
    const randEmailService = emailService[randEmailServiceIndex];
    return `${randEmailFirstName}${randEmailNum}${randEmailService}`;
}

const emailButton = document.getElementById('random-email-button');
const emailText = document.getElementById('random-email-text');

function exposeEmail() {
    emailText.innerHTML = randomEmail();
    emailText.style.display = 'block';
    emailButton.innerHTML = 'Generate New Random Email';
};

emailButton.addEventListener('click', exposeEmail);


/* Code to generate a random phone number and expose it on the Contact page */
const randomPhone = () => {
    const tenDigits = Math.floor(Math.random() * 9 + 1) + Math.random().toString().slice(2,11);
    const tenDigitsArray = tenDigits.split("");
    tenDigitsArray.splice(3, 0, ".");
    tenDigitsArray.splice(7, 0, ".");
    return tenDigitsArray.join('');
};

const phoneButton = document.getElementById('random-phone-button');
const randomPhoneText = document.getElementById('random-phone-text');

function showRandomPhone() {
    randomPhoneText.innerHTML = randomPhone();
    phoneButton.innerHTML = 'Generate New Random Number';
    randomPhoneText.style.display = 'block';
};

phoneButton.addEventListener('click', showRandomPhone);


/* Code to update the logo to a random set of characters when a user clicks on it */

const alphabetString = "abcdefghijklmnopqrstuvwxyz";
/*const logoLastName = "abcdefghijklmnopqrstuvwxyz";*/
const alphabetArray = alphabetString.split("");

const randFirstName = () => {
    let newFirstName = "";
    
    for (let i = 0; i < 5; i++) {
        randAlphabetIndex = Math.floor(Math.random() * 26);
        newFirstName += alphabetArray[randAlphabetIndex];
    };
    return newFirstName;
};

const randLastName = () => {
    let newLastName = "";
    
    for (let i = 0; i < 9; i++) {
        randAlphabetIndex = Math.floor(Math.random() * 26);
        newLastName += alphabetArray[randAlphabetIndex];
    };
    return newLastName;
};

/* Trying to come up with something else... */

const footer = document.getElementById('emojis');

function thirdEmojiSet() {
    footer.innerHTML = '🅱️🅾️🅾️🅿️';
};

function updateEmojis() {
    footer.innerHTML = '🚵‍♂️🧗🏌️';
    footer.addEventListener('click', thirdEmojiSet);
};



footer.addEventListener('click', updateEmojis);
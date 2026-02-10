// multi-language-setup.js

// Translations object
const translations = {
    en: {
        welcome: "Welcome to our platform",
        goodbye: "Thank you for visiting!"
    },
    id: {
        welcome: "Selamat datang di platform kami",
        goodbye: "Terima kasih telah mengunjungi!"
    }
};

// Current language variable
let currentLanguage = 'en';

// Function to switch language
function switchLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        updateText();
    }
}

// Function to update displayed text
function updateText() {
    document.getElementById('welcomeMessage').innerText = translations[currentLanguage].welcome;
    document.getElementById('goodbyeMessage').innerText = translations[currentLanguage].goodbye;
}

// Keyboard shortcuts for language switching
document.addEventListener('keypress', (event) => {
    if (event.key === 'e') { // Switch to English
        switchLanguage('en');
    } else if (event.key === 'i') { // Switch to Indonesian
        switchLanguage('id');
    }
});

// Initialize with default language
updateText();
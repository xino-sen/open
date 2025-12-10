function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Animated Love Message
const message = [
    "You are my today and all of my tomorrows ❤️",
    "Every moment with you is a beautiful memory.",
    "Thank you for being my constant source of happiness.",
    "I love you more than words can ever express."
];

let index = 0;
function showMessage() {
    const msgBox = document.getElementById("loveMessage");
    msgBox.textContent = message[index];
    index = (index + 1) % message.length;
}

setInterval(showMessage, 3000);
showMessage();

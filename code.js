// Function to display Main Content
function showMainContent() {
    window.location.href = 'main.html';
}

// Function to reset to the intro screen
function resetToIntro() {
    window.location.href = 'index.html';
}

document.addEventListener("DOMContentLoaded", function () {
    const formElement = document.getElementById('form');
    if (formElement) {
        formElement.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('You have submitted it!');
            formElement.reset();
        });
    } else {
        console.log("Form element not found.");
    }
});

function scrollToIntro() {
    document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
}

// Function to get the current date 
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${minutes} ${ampm}`;

    timeElement.textContent = formattedTime;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();


// Quotes
const quotes = [
    "We live to make the impossible possible. That is our focus.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your time is limited, don't waste it living someone else's life.",
    "Believe you can and you're halfway there."
];


function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteText').innerText = quotes[randomIndex];
}

// Add event listener to button
document.getElementById('newQuoteBtn').addEventListener('click', getNewQuote);

// Set your wedding date and time
const weddingDate = new Date("December 18, 2026 18:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Update immediately and every second
updateCountdown();
setInterval(updateCountdown, 1000);

let quoteIndex = 0;

const quotes = document.querySelectorAll(".quote");
const dotsContainer = document.getElementById("quoteDots");

quotes.forEach((quote, index) => {
    const dot = document.createElement("span");

    dot.className = "quote-dot";
    dot.onclick = () => showQuote(index);

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".quote-dot");

function showQuote(index) {
    quotes[quoteIndex].classList.remove("active");
    dots[quoteIndex].classList.remove("active");

    quoteIndex = (index + quotes.length) % quotes.length;

    quotes[quoteIndex].classList.add("active");
    dots[quoteIndex].classList.add("active");
}

function nextQuote() {
    showQuote(quoteIndex + 1);
}

function previousQuote() {
    showQuote(quoteIndex - 1);
}

showQuote(0);

setInterval(nextQuote, 5000);

const flowerContainer = document.getElementById("flowerAnimation");

const flowers = ["🌸", "🌺", "🌼", "🌷", "💮"];

function createFlower() {
    const flower = document.createElement("span");

    flower.classList.add("flower");

    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize = (15 + Math.random() * 20) + "px";

    flower.style.animationDuration = (5 + Math.random() * 8) + "s";

    flower.style.animationDelay = Math.random() * 2 + "s";

    flowerContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 13000);
}

setInterval(createFlower, 400);

const weddingMusic = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");
const muteToggle = document.getElementById("muteToggle");


musicToggle.addEventListener("click", async () => {
    if (weddingMusic.paused) {
        try {
            await weddingMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            musicToggle.classList.add("playing");
        } catch (error) {
            console.log("Unable to play music:", error);
        }
    } else {
        weddingMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-play"></i>';
        musicToggle.classList.remove("playing");
    }
});

muteToggle.addEventListener("click", () => {
    weddingMusic.muted = !weddingMusic.muted;

    if (weddingMusic.muted) {
        muteToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        muteToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
});
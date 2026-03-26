const startDate = new Date("2024-08-31");

/* ELEMENTOS */
const timerElements = {
    years: document.getElementById('years'),
    months: document.getElementById('months'),
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

/* ANIMAÇÃO NUMEROS */
function updateElement(el, value) {
    if (el.textContent !== value) {
        el.textContent = value;
        el.classList.add('flip');
        setTimeout(() => el.classList.remove('flip'), 400);
    }
}

/* TIMER */
function updateTimer() {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const diff = now - startDate;
    const totalSeconds = Math.floor(diff / 1000);

    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;

    updateElement(timerElements.years, String(years).padStart(2,'0'));
    updateElement(timerElements.months, String(months).padStart(2,'0'));
    updateElement(timerElements.days, String(days).padStart(2,'0'));
    updateElement(timerElements.hours, String(hours).padStart(2,'0'));
    updateElement(timerElements.minutes, String(minutes).padStart(2,'0'));
    updateElement(timerElements.seconds, String(seconds).padStart(2,'0'));
}

setInterval(updateTimer, 1000);

// Galeria
        let currentImageIndex = 0;
        const images = document.querySelectorAll('.photos img');
        function changeImage() {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }
        setInterval(changeImage, 3000);

/* TEXTO DIGITANDO */
const text = "Cada momento ao seu lado é um presente. Eu te amo de mais Dondoca 💕";
const typingElement = document.getElementById("typingText");

let i = 0;

function typeEffect() {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    } else {
        typingElement.innerHTML += '<span class="cursor"></span>';
    }
}

typeEffect();

/* CORAÇÕES */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 500);


// Áudio Eu te amo
        function playLove() {
            const audio = document.getElementById('loveAudio');
            audio.play();
        }



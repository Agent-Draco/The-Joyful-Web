// ================================
// THE JOYFUL WEB
// RANDOM.JS
// ================================

const randomButton = document.getElementById("randomButton");

let rouletteOverlay = document.getElementById("rouletteOverlay");
let rouletteName = document.getElementById("rouletteName");
let rouletteCategory = document.getElementById("rouletteCategory");

if (!rouletteOverlay) {

    rouletteOverlay = document.createElement("div");
    rouletteOverlay.id = "rouletteOverlay";
    rouletteOverlay.className = "hidden";
    rouletteOverlay.innerHTML = `
        <div class="container">
            <h1 id="rouletteName">🎲 Spin the wheel</h1>
            <p id="rouletteCategory">Choosing a website...</p>
        </div>
    `;

    document.body.appendChild(rouletteOverlay);

    rouletteName = document.getElementById("rouletteName");
    rouletteCategory = document.getElementById("rouletteCategory");

}

if (randomButton) {

    randomButton.addEventListener("click", startRoulette);

}

function startRoulette() {

    if (!rouletteOverlay) return;

    rouletteOverlay.classList.remove("hidden");
    rouletteOverlay.classList.add("show");

    let count = 0;

    const interval = setInterval(() => {

        const site = websites[
            Math.floor(Math.random() * websites.length)
        ];

        rouletteName.textContent = site.icon + " " + site.name;
        rouletteCategory.textContent = site.category;

        count++;

        if (count >= 20) {

            clearInterval(interval);

            finishRoulette();

        }

    }, 80);

}

function finishRoulette() {

    const site = websites[
        Math.floor(Math.random() * websites.length)
    ];

    rouletteName.textContent =
        site.icon + " " + site.name;

    rouletteCategory.textContent =
        "Opening website...";

    setTimeout(() => {

        window.open(
            site.url,
            "_blank"
        );

        rouletteOverlay.classList.remove("show");

        setTimeout(() => {

            rouletteOverlay.classList.add("hidden");

        }, 300);

    }, 1200);

}
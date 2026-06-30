// ================================
// THE JOYFUL WEB
// MAIN.JS
// PART 1
// ================================

const featuredCards = document.getElementById("featuredCards");

let modal = document.getElementById("previewModal");
let modalTitle = document.getElementById("modalTitle");
let modalDescription = document.getElementById("modalDescription");
let modalTags = document.getElementById("modalTags");
let visitWebsite = document.getElementById("visitWebsite");
let closeModal = document.getElementById("closeModal");

if (!modal) {

    modal = document.createElement("div");
    modal.id = "previewModal";
    modal.className = "hidden";
    modal.innerHTML = `
        <div class="modal">
            <button id="closeModal" class="closeBtn" aria-label="Close">×</button>
            <h2 id="modalTitle"></h2>
            <p id="modalDescription"></p>
            <div id="modalTags"></div>
            <button type="button" id="visitWebsite" class="teacher-link">Visit website</button>
        </div>
    `;

    document.body.appendChild(modal);

    modalTitle = document.getElementById("modalTitle");
    modalDescription = document.getElementById("modalDescription");
    modalTags = document.getElementById("modalTags");
    visitWebsite = document.getElementById("visitWebsite");
    closeModal = document.getElementById("closeModal");

}

// -------------------------------
// Loading Screen
// -------------------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("mathmania-loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 700);

    }

});

// -------------------------------
// Create Website Card
// -------------------------------

function createCard(site){

    const card = document.createElement("div");

    card.className = "website-card";

    let tags = "";

    site.vibes.forEach(vibe=>{

        tags += `<span class="tag">${vibe}</span>`;

    });

    card.innerHTML = `

        <div class="category-icon">

            ${site.icon}

        </div>

        <h3>

            ${site.name}

        </h3>

        <p>

            ${site.description}

        </p>

        <div class="tags">

            ${tags}

        </div>

        <br>

        <button class="teacher-link">

            Preview

        </button>

    `;

    card.querySelector("button")
        .addEventListener("click",()=>{

            openModal(site);

        });

    return card;

}

// -------------------------------
// Populate Homepage
// -------------------------------

if(featuredCards){

    websites
        .slice(0,6)
        .forEach(site=>{

            featuredCards.appendChild(

                createCard(site)

            );

        });

}

// -------------------------------
// Modal
// -------------------------------

function openModal(site){

    modal.classList.remove("hidden");

    modal.classList.add("show");

    modalTitle.innerHTML =

        `${site.icon} ${site.name}`;

    modalDescription.textContent =

        site.description;

    modalTags.innerHTML = "";

    site.vibes.forEach(vibe=>{

        const tag = document.createElement("span");

        tag.className = "tag";

        tag.textContent = vibe;

        modalTags.appendChild(tag);

    });

    visitWebsite.onclick = () => {

        window.open(site.url, "_blank", "noopener,noreferrer");

        closePreview();

    };

}

function closePreview(){

    modal.classList.remove("show");

    setTimeout(()=>{

        modal.classList.add("hidden");

    },300);

}

if(closeModal){

    closeModal.onclick = closePreview;

}

window.onclick = function(e){

    if(e.target===modal){

        closePreview();

    }

};

document.addEventListener("keydown",e=>{

    if(e.key==="Escape"){

        closePreview();

    }

});
// ================================
// MAIN.JS
// PART 2
// ================================

// -------------------------------
// Category Pages
// -------------------------------

const pageGrid = document.getElementById("websiteGrid");

if (pageGrid) {

    const category = pageGrid.dataset.category;

    let list = websites;

    if (category !== "all") {

        list = websites.filter(site => site.category === category);

    }

    list.forEach(site => {

        pageGrid.appendChild(createCard(site));

    });

}

// -------------------------------
// Search
// -------------------------------

const searchBox = document.getElementById("search");

if (searchBox && pageGrid) {

    searchBox.addEventListener("input", function () {

        const value = this.value.toLowerCase();

        pageGrid.innerHTML = "";

        websites

            .filter(site => {

                return (

                    site.name.toLowerCase().includes(value) ||

                    site.description.toLowerCase().includes(value) ||

                    site.vibes.join(" ").toLowerCase().includes(value)

                );

            })

            .forEach(site => {

                pageGrid.appendChild(createCard(site));

            });

    });

}

// -------------------------------
// Smooth Card Fade
// -------------------------------

const cards = document.querySelectorAll(".website-card");

cards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = ".45s ease";

        card.style.opacity = "1";

        card.style.transform = "translateY(0px)";

    }, index * 80);

});

// -------------------------------
// Dynamic Page Titles
// -------------------------------

const titles = {

    "games": "🎮 Games",

    "creative": "🎨 Creative",

    "hacker": "💻 Hacker Simulators",

    "fake-os": "🖥️ Fake Operating Systems",

    "explore": "🌍 Explore",

    "weird": "😂 Weird Internet",

    "all": "🌐 All Websites"

};

if (pageGrid) {

    const heading = document.querySelector("main h1");

    if (heading && titles[pageGrid.dataset.category]) {

        heading.textContent = titles[pageGrid.dataset.category];

    }

}

// -------------------------------
// Footer Year
// -------------------------------

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// -------------------------------
// Sidebar Active Link
// -------------------------------

document.querySelectorAll(".sidebar nav a").forEach(link => {

    if (

        window.location.pathname.endsWith(link.getAttribute("href"))

    ) {

        link.classList.add("active");

    }

});

const sidebarTitle = document.querySelector(".sidebar h1");

if (sidebarTitle && !sidebarTitle.closest("a")) {

    const titleLink = document.createElement("a");
    titleLink.href = "index.html";
    titleLink.className = "sidebar-title-link";
    titleLink.innerHTML = sidebarTitle.innerHTML;

    sidebarTitle.replaceWith(titleLink);

}

// -------------------------------
// Keyboard Shortcuts
// -------------------------------

document.addEventListener("keydown", e => {

    if (e.key.toLowerCase() === "r") {

        const randomButton = document.getElementById("randomButton");

        if (randomButton) {

            randomButton.click();

        }

    }

});

// -------------------------------
// Console Greeting
// -------------------------------

console.log(
`
🌐 The Joyful Web

Made by Agent Draco

Welcome, curious explorer.

`
);
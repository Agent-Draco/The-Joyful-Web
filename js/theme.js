// =========================================
// THE JOYFUL WEB
// THEME.JS
// =========================================

const html = document.documentElement;

const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

// ---------------------------
// Load Saved Theme
// ---------------------------

const savedTheme = localStorage.getItem("joyfulTheme");

if (savedTheme) {

    html.setAttribute("data-theme", savedTheme);

    updateButtons(savedTheme);

} else {

    html.setAttribute("data-theme", "light");

}

// ---------------------------
// Button Events
// ---------------------------

if (lightBtn) {

    lightBtn.addEventListener("click", () => {

        setTheme("light");

    });

}

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        setTheme("dark");

    });

}

// ---------------------------
// Set Theme
// ---------------------------

function setTheme(theme) {

    html.setAttribute("data-theme", theme);

    localStorage.setItem("joyfulTheme", theme);

    updateButtons(theme);

}

// ---------------------------
// Update Active Button
// ---------------------------

function updateButtons(theme) {

    if (!lightBtn || !darkBtn) return;

    lightBtn.classList.remove("active");
    darkBtn.classList.remove("active");

    if (theme === "dark") {

        darkBtn.classList.add("active");

    } else {

        lightBtn.classList.add("active");

    }

}

// ---------------------------
// Keyboard Shortcut
// Press T to Toggle Theme
// ---------------------------

document.addEventListener("keydown", (event) => {

    if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
    ) {
        return;
    }

    if (event.key.toLowerCase() === "t") {

        const current = html.getAttribute("data-theme");

        if (current === "dark") {

            setTheme("light");

        } else {

            setTheme("dark");

        }

    }

});

// ---------------------------
// Console Message
// ---------------------------

console.log("🎨 Theme Manager Loaded");
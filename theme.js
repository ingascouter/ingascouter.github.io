// Check for saved dark mode preference in localStorage
const savedTheme = localStorage.getItem('theme');
// If none, check browser theme preference
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme)) {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Function to enable dark mode
const moon = document.querySelector('.moon');
function enableDarkMode() {
    // Set body "color scheme" style to "dark"
    document.documentElement.style.colorScheme = 'dark';
    // Set localStorage to dark
    localStorage.setItem('theme', 'dark');
    // Update icon to match, by swapping "fa-sun" with "hidden" and changing "hidden" to "fa-moon"
    moon.classList.remove('hidden');
    moon.classList.add(modeIcons[currentModeIndex]);
}

// Function to disable dark mode
const moon = document.querySelector('.sun');
function disableDarkMode() {
    // Set body "color scheme" style to "light"
    document.documentElement.style.colorScheme = 'light';
    // Set localStorage to light
    localStorage.setItem('theme', 'light');
    // Update icon to match, by swapping "fa-moon" with "hidden" and changing "hidden" to "fa-sun"
    sun.classList.remove('hidden');
    sun.classList.add(modeIcons[currentModeIndex]);
}

// Toggle dark mode function, called by button click, default to dark as page is light by default
function toggleDarkMode() {
    if (document.documentElement.style.colorScheme === 'dark') {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}
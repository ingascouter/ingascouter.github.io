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
function enableDarkMode() {
    // Set body "color scheme" style to "only dark"
    document.documentElement.style.colorScheme = 'dark';
    // Set localStorage to dark
    localStorage.setItem('theme', 'dark');
}

// Function to disable dark mode
function disableDarkMode() {
    // Set body "color scheme" style to "only light"
    document.documentElement.style.colorScheme = 'light';
    // Set localStorage to light
    localStorage.setItem('theme', 'light');
}

// Toggle dark mode function, called by button click, default to dark as page is light by default
function toggleDarkMode() {
    if (document.documentElement.style.colorScheme === 'dark') {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}
// --- PAGE NAVIGATION LOGIC ---
function showHome() {
    hideAll();
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('contentWrapper').style.display = 'block';
}

function showAbout() {
    hideAll();
    document.getElementById('aboutPage').style.display = 'block';
    document.getElementById('contentWrapper').style.display = 'block';
}

function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// --- AUTHENTICATION SIMULATION ---
function handleLogin() {
    // Hide Landing Page, Show Dashboard
    hideAll();
    document.getElementById('publicHeader').style.display = 'none';
    document.getElementById('contentWrapper').style.display = 'none';
    document.getElementById('dashboardPage').style.display = 'block';
    document.getElementById('loginModal').style.display = 'none';
}

function logout() {
    location.reload(); // Simple way to reset state
}

function hideAll() {
    const pages = ['homePage', 'aboutPage', 'faqPage', 'dashboardPage', 'contentWrapper'];
    pages.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.style.display = 'none';
    });
}

// Close Modal on click outside
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

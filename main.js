document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadHomePage();
        window.history.pushState({ page: 'home' }, 'Home', '#home');
    });

    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadAboutPage();
        window.history.pushState({ page: 'about' }, 'About', '#about');
    });

    // Load initial content based on the hash or default to home
    if (window.location.hash === '#about') {
        loadAboutPage();
    } else {
        loadHomePage();
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.page === 'about') {
            loadAboutPage();
        } else {
            loadHomePage();
        }
    });
});

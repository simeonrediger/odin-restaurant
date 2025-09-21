export default (function() {
    const homeButton = document.getElementById('home-button');
    const menuButton = document.getElementById('menu-button');
    const aboutButton = document.getElementById('about-button');
    const contactButton = document.getElementById('contact-button');

    function bindEvents(renderHome, renderMenu, renderAbout, renderContact) {
        homeButton.addEventListener('click', renderHome);
        menuButton.addEventListener('click', renderMenu);
        aboutButton.addEventListener('click', renderAbout);
        contactButton.addEventListener('click', renderContact);
    }

    return {
        bindEvents,
    };
})();

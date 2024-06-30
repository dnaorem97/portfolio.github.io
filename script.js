document.addEventListener("DOMContentLoaded", () => {
    // Function to load the content of the given page
    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.querySelector('main').innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const page = link.getAttribute("href");
            loadPage(page);
        });
    });

    // Load the default page (home.html)
    loadPage('Home.html');
});

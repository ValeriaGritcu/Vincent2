// NAVIGARE CU ANCORA
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.getElementById("current-date");

    const today = new Date();

    const formattedDate = today.toLocaleDateString('ro-RO', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    dateElement.textContent = formattedDate;
});

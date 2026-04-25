document.addEventListener('DOMContentLoaded', () => {
    
    // Création de l'élément curseur dynamiquement
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    // Suivi de la souris
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Effet au survol des éléments cliquables
    const links = document.querySelectorAll('a, button, .clickable');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });

    /* --- Garde le reste de ton code précédent ici (Year, Scroll Reveal, Form) --- */
    document.getElementById('year').textContent = new Date().getFullYear();
    // ... suite du code
});
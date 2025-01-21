const pixelArt = document.getElementById('pixel-art');
const numPixels = 484; // Nombre de pixels à générer

// Chargement du son
const soundEffect = new Audio('public/sounds/pixel-song-21-72593.mp3');

// Création des pixels en boucle
for (let i = 0; i < numPixels; i++) {
    const pixel = document.createElement('div'); // Crée un élément 'div' pour chaque pixel
    pixel.classList.add('pixel'); // Ajoute la classe 'pixel' pour chaque pixel

    // Ajoute l'événement 'mouseover' pour changer la couleur du pixel et jouer le son
    pixel.addEventListener('mouseover', () => {
        soundEffect.currentTime = 0; // Remet le son au début pour éviter les superpositions
        soundEffect.play(); // Joue le son
        pixel.style.backgroundColor = getRandomColor(); // Change la couleur du pixel
        setTimeout(() => {
            pixel.style.backgroundColor = ''; // Remet la couleur par défaut après 500ms
        }, 500);
    });

    pixelArt.appendChild(pixel); // Ajoute le pixel créé au conteneur #pixel-art
}

// Fonction pour générer une couleur aléatoire
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

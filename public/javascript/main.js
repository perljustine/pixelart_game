const pixelArt = document.getElementById('pixel-art');
const numPixels = 300; // Nombre de pixels à générer

// Création des pixels en boucle
for (let i = 0; i < numPixels; i++) {
    const pixel = document.createElement('div'); // Crée un élément 'div' pour chaque pixel
    pixel.classList.add('pixel'); // Ajoute la classe 'pixel' pour chaque pixel
    
    // Ajoute l'événement 'mouseover' pour changer la couleur du pixel
    pixel.addEventListener('mouseover', function() {
        this.style.backgroundColor = getRandomColor();
        setTimeout(() => {
            this.style.backgroundColor = ''; // Remet la couleur par défaut après 500ms
        }, 500);
    });
    
    pixelArt.appendChild(pixel); // Ajoute le pixel créé au conteneur #pixel-art
}

// Fonction pour générer une couleur aléatoire
function getRandomColor() {  // fonction basique pour générer une couleur random 
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) { // le 6 est pour trouver une lettre au hasard jusque 6 car les codes couleurs sont généré en 6lettres
        color += letters[Math.floor(Math.random() * 16)];  //  prendre dans ces 16 valeurs de const letters
    }
    return color; 
    // exemple: '#123456' est une couleur aléatoire généré par cette fonction
}

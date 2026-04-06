
document.addEventListener('DOMContentLoaded', () => {
    const iconsContainer = document.getElementById('icons');
    if (iconsContainer) {
        shuffle(iconsContainer);
    }

    const avatar = document.getElementById('avatar');
    if (avatar) {
        const originalSrc = 'images/avatar.jpg';
        const hoverSrc = 'https://en.gravatar.com/userimage/17552033/c3fcd2d4827cf6d19b1075e70b35d1ae.jpg?size=100';
        
        avatar.addEventListener('mouseover', () => {
            avatar.src = hoverSrc;
        });
        
        avatar.addEventListener('mouseout', () => {
            avatar.src = originalSrc;
        });
        
        avatar.addEventListener('click', playMe);
    }
});

function playMe() {
    const randomIndex = Math.floor(Math.random() * 7);
    const snd = new Audio(`sounds/${randomIndex}.wav`);
    snd.play().catch(e => console.error("Error playing sound:", e));
}

function shuffle(container) {
    const elements = Array.from(container.children);
    for (let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.appendChild(elements[j]);
    }
}

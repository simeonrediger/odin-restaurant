export default function render(container) {
    const headline = document.createElement('h2');
    headline.textContent = 'Shadows, Silk, and Sovereignty';
    headline.classList.add('headline');

    const restaurantDescription1 = document.createElement('p');
    restaurantDescription1.textContent = `
        Beneath velvet drapery and watchful golden eyes, the House of the Ninth
        Life offers more than a meal — it offers an audience with majesty. Here,
        every detail bends in reverence to our eternal overseer: the Cat
        Sovereign, whose silent decree governs the kitchen, the table, and the
        air you breathe.
    `;

    const restaurantDescription2 = document.createElement('p');
    restaurantDescription2.textContent = `
        Guests are invited not merely to dine, but to partake in ritual. Shadows
        stretch long across candlelit halls, and flavors are woven with ceremony
        — rich, deliberate, and inescapable. To enter is to submit, to linger is
        to be judged, and to eat is to honor the Ninth Life itself.
    `;

    const content = document.createElement('div');
    content.id = 'about';
    content.append(
        headline,
        restaurantDescription1,
        restaurantDescription2,
    );

    container.append(content);
}

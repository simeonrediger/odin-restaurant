import dishImage from '../../assets/images/bread-grapes-and-wine.jpg';

export default function render(container) {
    const dishImageElement = document.createElement('img');
    dishImageElement.src = dishImage;
    dishImageElement.alt = 'Bread, grapes, and wine';
    dishImageElement.title = 'Photo by Marek Studzinski on Unsplash';
    dishImageElement.width = '240';

    const dishName = document.createElement('h2');
    dishName.textContent = 'The Ninth Life Supper';

    const dishDescription = document.createElement('p');
    dishDescription.textContent = `
        An opulent final indulgence decreed by our feline sovereign. Rich, dark
        flavors layered with subtle sweetness, crafted to linger like a
        whispered secret you were never meant to hear.
    `;

    const content = document.createElement('div');
    content.id = 'menu';
    content.append(
        dishImageElement,
        dishName,
        dishDescription,
    );

    container.append(content);
}

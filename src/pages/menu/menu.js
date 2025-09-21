import './menu.css';
import dishImage from '../../assets/images/bread-grapes-and-wine.jpg';
import currencySymbol from '../../assets/icons/skull.svg';

export default function render(container) {
    const dishImageElement = document.createElement('img');
    dishImageElement.src = dishImage;
    dishImageElement.alt = 'Bread, grapes, and wine';
    dishImageElement.title = 'Photo by Marek Studzinski on Unsplash';
    dishImageElement.width = '272';
    dishImageElement.classList.add('dish-image');

    const dishName = document.createElement('h2');
    dishName.textContent = 'The Ninth Life Supper';
    dishName.classList.add('dish-name');

    const dishDescription = document.createElement('p');
    dishDescription.textContent = `
        An opulent final indulgence decreed by our feline sovereign. Rich, dark
        flavors layered with subtle sweetness, crafted to linger like a
        whispered secret you were never meant to hear.
    `;
    dishDescription.classList.add('dish-description');

    const dishPrice = document.createElement('div');
    const currencySymbolIcon = document.createElement('img');
    currencySymbolIcon.src = currencySymbol;
    const priceText = document.createTextNode('1 soul');
    dishPrice.append(currencySymbolIcon, priceText);
    dishPrice.classList.add('dish-price');

    const content = document.createElement('div');
    content.id = 'menu';
    content.append(
        dishImageElement,
        dishName,
        dishDescription,
        dishPrice,
    );

    container.append(content);
}

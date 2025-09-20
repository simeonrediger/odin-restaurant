import heroImage from '../assets/images/cat-on-dining-table.jpg';

const heroImageElement = document.createElement('img');
heroImageElement.src = heroImage;
heroImageElement.alt = 'Cat sits on dining table';
heroImageElement.title = 'Photo by shahin khalaji on Unsplash';
heroImageElement.width = 800;

const restaurantHeadline = document.createElement('h2');
restaurantHeadline.textContent = 'Come... Feast... Bask in my glory...';

const restaurantDescription = document.createElement('p');
restaurantDescription.textContent = `
    This restaurant is overseen by a regal feline whose presence is felt in
    every detail, from the velvet seating to the meticulous service. Guests dine
    under the watchful gaze of their cat overlord, where indulgence and
    obedience are equally expected. It is a place where elegance and authority
    converge, with each meal served as both offering and reward.
`;

const content = document.createDocumentFragment();
content.append(
    heroImageElement,
    restaurantHeadline,
    restaurantDescription,
);

export default content;

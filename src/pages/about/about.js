export default function render(container) {
    const testElement = document.createElement('p');
    testElement.textContent = `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia
        voluptates architecto repellendus nihil nesciunt ducimus mollitia
        assumenda optio? Ex cum repellat dicta tempora? Earum, eligendi
        accusantium. Pariatur, nemo illo.
    `;

    const content = document.createElement('div');
    content.id = 'about';
    content.append(
        testElement,
    );

    container.append(content);
}

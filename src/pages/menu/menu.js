export default function render(container) {
    const testElement = document.createElement('p');
    testElement.textContent = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet
        possimus porro deleniti enim magni, sint ab ut aspernatur sunt quia ex
        at voluptas, quaerat vel. Odit suscipit nulla dolorem.
    `;

    const content = document.createElement('div');
    content.id = 'menu';
    content.append(
        testElement,
    );

    container.append(content);
}

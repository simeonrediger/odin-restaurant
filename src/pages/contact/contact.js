export default function render(container) {
    const testElement = document.createElement('p');
    testElement.textContent = `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad aperiam
        atque nulla voluptates nostrum hic voluptate illum tempore veritatis
        sequi quisquam veniam illo laudantium ea aut, quaerat est voluptas sunt.
    `;

    const content = document.createElement('div');
    content.id = 'contact';
    content.append(
        testElement,
    );

    container.append(content);
}

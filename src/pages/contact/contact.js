export default function render(container) {
    const form = document.createElement('form');

    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Beseech your Lord...';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Thine email';

    const messageInput = document.createElement('textarea');
    messageInput.placeholder = 'Thy bidding'

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit to your Lord';

    form.append(
        formTitle,
        emailInput,
        messageInput,
        submitButton,
    );

    const content = document.createElement('div');
    content.id = 'contact';
    content.append(
        form,
    );

    container.append(content);
}

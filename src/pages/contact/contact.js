import './contact.css';

export default function render(container) {
    const form = document.createElement('form');

    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Beseech your Lord...';
    formTitle.classList.add('form-title');

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Thine email';
    emailInput.classList.add('email-input', 'input');

    const messageInput = document.createElement('textarea');
    messageInput.placeholder = 'Thy bidding'
    messageInput.classList.add('message-input', 'input');

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit to your Lord';
    submitButton.classList.add('submit-button', 'button');

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

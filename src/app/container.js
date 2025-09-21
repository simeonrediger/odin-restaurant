import { delay } from './utilities.js';

export default (function () {
    const element = document.getElementById('content');

    async function render(renderPage) {
        hide();
        await delay(200);
        empty();
        renderPage(element);
        await delay(200);
        show();
    }

    function hide() {
        element.classList.add('hidden');
    }

    function empty() {

        while (element.firstChild) {
            element.firstChild.remove();
        }
    }

    function show() {
        element.classList.remove('hidden');
    }

    return {
        render,
    };
})();

export default (function () {
    const element = document.getElementById('content');

    function render(renderPage) {
        empty();
        renderPage(element);
    }

    function empty() {

        while (element.firstChild) {
            element.firstChild.remove();
        }
    }

    return {
        render,
    };
})();

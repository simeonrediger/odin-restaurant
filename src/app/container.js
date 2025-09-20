export default (function () {
    const element = document.getElementById('content');

    function setContent(page) {
        empty();
        element.append(page);
    }

    function empty() {

        while (element.firstChild) {
            element.firstChild.remove();
        }
    }

    return {
        setContent,
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const closeButton = document.getElementById('closeButton');
    const searchQuery = document.getElementById('searchQuery');

    searchQuery.focus();

    const onSearchHandler = () => {
        const query = searchQuery.value;
        if (query) {
            const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
            chrome.tabs.create({ url });
        }
    };

    const onClosePopup = () => {
        window.close();
    }

    searchQuery.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            onSearchHandler();
        }
    });

    searchButton.addEventListener('click', onSearchHandler);
    closeButton.addEventListener('click', onClosePopup);
});

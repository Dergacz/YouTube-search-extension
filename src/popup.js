document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchQuery = document.getElementById('searchQuery');

    searchButton.addEventListener('click', function () {
        const query = searchQuery.value;
        if (query) {
            const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
            chrome.tabs.create({ url });
        }
    });
});

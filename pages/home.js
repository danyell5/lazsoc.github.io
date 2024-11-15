async function loadHomePage() {
    const url = `https://cdn.contentful.com/spaces/${CONFIG.space}/entries?access_token=${CONFIG.accessToken}&content_type=homePage`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayHomePage(data.items);
    } catch (error) {
        console.error('Error fetching home page data:', error);
    }
}

function displayHomePage(entries) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content
    entries.forEach(entry => {
        contentDiv.innerHTML += `
            <h2>${entry.fields.title}</h2>
            <p>${entry.fields.description}</p>
        `;
    });
}

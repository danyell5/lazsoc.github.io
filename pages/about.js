async function loadAboutPage() {
    const url = `https://cdn.contentful.com/spaces/${CONFIG.space}/entries?access_token=${CONFIG.accessToken}&content_type=aboutPage`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayAboutPage(data.items);
    } catch (error) {
        console.error('Error fetching about page data:', error);
    }
}

function displayAboutPage(entries) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content
    entries.forEach(entry => {
        contentDiv.innerHTML += `
            <h2>${entry.fields.title}</h2>
            <p>${entry.fields.content}</p>
        `;
    });
}

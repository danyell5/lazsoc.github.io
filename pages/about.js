async function loadAboutPage() {
    const entryId = '2c9m32MdBDznlQ4eL3YtLW'; // Replace with your specific entry ID
    const url = `https://cdn.contentful.com/spaces/${CONFIG.space}/environments/master/entries/${entryId}?access_token=${CONFIG.accessToken}`;

    try {
        const response = await fetch(url);
        const entry = await response.json();
        displayAboutPage(entry);
    } catch (error) {
        console.error('Error fetching about page entry:', error);
    }
}

function displayAboutPage(entry) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content

    // Assuming the entry structure includes a title and content
    contentDiv.innerHTML += `
        <h2>${entry.fields.title || 'No title'}</h2>
        <p>${entry.fields.content || 'No content available'}</p>
    `;

    // Display the about photo if it exists
    if (entry.fields.aboutPhoto) {
        const imageId = entry.fields.aboutPhoto.sys.id;
        fetchAsset(imageId);
    }
}

// Fetches and displays an asset like an image
async function fetchAsset(assetId) {
    const assetUrl = `https://cdn.contentful.com/spaces/${CONFIG.space}/environments/master/assets/${assetId}?access_token=${CONFIG.accessToken}`;
    try {
        const response = await fetch(assetUrl);
        const asset = await response.json();
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML += `<img src="https:${asset.fields.file.url}" alt="${asset.fields.title}">`;
    } catch (error) {
        console.error('Error fetching asset:', error);
    }
}

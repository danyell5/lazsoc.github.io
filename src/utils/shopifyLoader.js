// Singleton to track script loading status
let isLoading = false;
let isLoaded = false;
let shopifyUIPromise = null;

export const loadShopifyScript = () => {
    return new Promise((resolve, reject) => {
        // If already loaded, resolve immediately
        if (window.ShopifyBuy && window.ShopifyBuy.UI) {
            isLoaded = true;
            resolve();
            return;
        }

        // If currently loading, wait for it
        if (isLoading) {
            const checkLoaded = setInterval(() => {
                if (isLoaded) {
                    clearInterval(checkLoaded);
                    resolve();
                }
            }, 100);
            return;
        }

        // Start loading
        isLoading = true;

        const script = document.createElement('script');
        script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        script.async = true;

        script.onload = () => {
            isLoaded = true;
            isLoading = false;
            resolve();
        };

        script.onerror = (error) => {
            isLoading = false;
            reject(error);
        };

        document.head.appendChild(script);
    });
};

export const initShopifyClient = () => {
    if (!window.ShopifyBuy) return null;

    const client = window.ShopifyBuy.buildClient({
        domain: 'lazaridis-students-society-2.myshopify.com',
        storefrontAccessToken: '3ba9a63766a1ae0ae326a50a33305c23',
    });

    return client;
};

// Initialize Shopify UI as early as possible
export const getShopifyUI = async () => {
    if (window.shopifyUIInstance) {
        return window.shopifyUIInstance;
    }

    if (shopifyUIPromise) {
        return shopifyUIPromise;
    }

    shopifyUIPromise = (async () => {
        try {
            await loadShopifyScript();
            const client = initShopifyClient();
            if (!client) throw new Error('Failed to initialize Shopify client');

            const ui = await window.ShopifyBuy.UI.onReady(client);
            window.shopifyUIInstance = ui;
            return ui;
        } catch (error) {
            console.error('Error initializing Shopify UI:', error);
            throw error;
        }
    })();

    return shopifyUIPromise;
};

// Start initialization immediately
getShopifyUI().catch(console.error); 
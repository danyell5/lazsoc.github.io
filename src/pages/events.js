import React, { useEffect } from 'react';
import Footer from '../components/footer/footer';

const Events = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        let shopifyUI = null;

        function ShopifyBuyInit() {
            // Check if already initialized
            if (window.shopifyUIInstance) {
                shopifyUI = window.shopifyUIInstance;
                try {
                    shopifyUI.destroyComponent('collection');
                    // Remove any existing collection components to prevent duplicates
                    const existingComponents = document.querySelectorAll('[id^="collection-component"]');
                    existingComponents.forEach(component => {
                        if (component && component.parentNode) {
                            component.parentNode.removeChild(component);
                        }
                    });
                    // Recreate the container div
                    const container = document.createElement('div');
                    container.id = 'collection-component-1737836124841';
                    const shopifyContent = document.querySelector('.shopify-content');
                    if (shopifyContent) {
                        shopifyContent.appendChild(container);
                    }
                } catch (e) {
                    console.warn('Error destroying existing collection:', e);
                }
                shopifyUI.createComponent('collection', {
                    id: '160853000265',
                    node: document.getElementById('collection-component-1737836124841'),
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
                        "product": {
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "calc(33.33% - 20px)",
                                        "margin-left": "20px",
                                        "margin-bottom": "50px",
                                        "width": "calc(33.33% - 20px)",
                                        "min-height": "400px",
                                        "position": "relative"
                                    },
                                    "img": {
                                        "height": "calc(100% - 15px)",
                                        "position": "absolute",
                                        "left": "0",
                                        "right": "0",
                                        "top": "0"
                                    },
                                    "imgWrapper": {
                                        "padding-top": "calc(75% + 15px)",
                                        "position": "relative",
                                        "height": "0"
                                    },
                                    "title": {
                                        "min-height": "60px",
                                        "display": "flex",
                                        "align-items": "center",
                                        "justify-content": "center",
                                        "text-align": "center",
                                        "margin-bottom": "10px",
                                        "padding": "0 10px"
                                    },
                                    "button": {
                                        "position": "absolute",
                                        "bottom": "0",
                                        "left": "50%",
                                        "transform": "translateX(-50%)",
                                        "width": "calc(100% - 20px)"
                                    }
                                },
                                "title": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-size": "19px",
                                    "color": "#000000"
                                },
                                "button": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#8e63c5"
                                    },
                                    "background-color": "#9e6edb",
                                    ":focus": {
                                        "background-color": "#8e63c5"
                                    },
                                    "border-radius": "9px",
                                    "padding-left": "46px",
                                    "padding-right": "46px"
                                },
                                "quantityInput": {
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px"
                                },
                                "price": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "color": "#000000"
                                },
                                "compareAt": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "color": "#000000"
                                },
                                "unitPrice": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "color": "#000000"
                                }
                            },
                            "buttonDestination": "modal",
                            "contents": {
                                "options": false
                            },
                            "text": {
                                "button": "View Product"
                            },
                            "googleFonts": [
                                "Montserrat"
                            ]
                        },
                        "productSet": {
                            "styles": {
                                "products": {
                                    "@media (min-width: 601px)": {
                                        "margin-left": "-20px"
                                    }
                                }
                            }
                        },
                        "modalProduct": {
                            "contents": {
                                "img": false,
                                "imgWithCarousel": true
                            },
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "100%",
                                        "margin-left": "0px",
                                        "margin-bottom": "0px"
                                    }
                                },
                                "button": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#8e63c5"
                                    },
                                    "background-color": "#9e6edb",
                                    ":focus": {
                                        "background-color": "#8e63c5"
                                    },
                                    "border-radius": "9px",
                                    "padding-left": "46px",
                                    "padding-right": "46px"
                                },
                                "quantityInput": {
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px"
                                },
                                "title": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "26px",
                                    "color": "#4c4c4c"
                                },
                                "price": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "18px",
                                    "color": "#4c4c4c"
                                },
                                "compareAt": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "15.299999999999999px",
                                    "color": "#4c4c4c"
                                },
                                "unitPrice": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "15.299999999999999px",
                                    "color": "#4c4c4c"
                                },
                                "description": {
                                    "font-family": "Montserrat, sans-serif"
                                }
                            },
                            "googleFonts": [
                                "Montserrat"
                            ],
                            "text": {
                                "button": "Add to Cart"
                            }
                        },
                        "option": {
                            "styles": {
                                "label": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold"
                                },
                                "select": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold"
                                }
                            },
                            "googleFonts": [
                                "Montserrat"
                            ]
                        },
                        "cart": {
                            "styles": {
                                "button": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#8e63c5"
                                    },
                                    "background-color": "#9e6edb",
                                    ":focus": {
                                        "background-color": "#8e63c5"
                                    },
                                    "border-radius": "9px"
                                },
                                "title": { "color": "#000000" },
                                "header": { "color": "#000000" },
                                "lineItems": { "color": "#000000" },
                                "subtotalText": { "color": "#000000" },
                                "subtotal": { "color": "#000000" },
                                "notice": { "color": "#000000" },
                                "currency": { "color": "#000000" },
                                "close": {
                                    "color": "#000000",
                                    ":hover": { "color": "#000000" }
                                },
                                "empty": { "color": "#000000" },
                                "noteDescription": { "color": "#000000" },
                                "discountText": { "color": "#000000" },
                                "discountIcon": { "fill": "#000000" },
                                "discountAmount": { "color": "#000000" }
                            },
                            "text": {
                                "total": "Subtotal",
                                "button": "Checkout"
                            },
                            "googleFonts": ["Montserrat"]
                        },
                        "toggle": {
                            "styles": {
                                "toggle": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "background-color": "#9e6edb",
                                    ":hover": {
                                        "background-color": "#8e63c5"
                                    },
                                    ":focus": {
                                        "background-color": "#8e63c5"
                                    }
                                },
                                "count": {
                                    "font-size": "14px"
                                }
                            },
                            "googleFonts": ["Montserrat"]
                        },
                        "lineItem": {
                            "styles": {
                                "variantTitle": { "color": "#000000" },
                                "title": { "color": "#000000" },
                                "price": { "color": "#000000" },
                                "fullPrice": { "color": "#000000" },
                                "discount": { "color": "#000000" },
                                "discountIcon": { "fill": "#000000" },
                                "quantity": { "color": "#000000" },
                                "quantityIncrement": {
                                    "color": "#000000",
                                    "border-color": "#000000"
                                },
                                "quantityDecrement": {
                                    "color": "#000000",
                                    "border-color": "#000000"
                                },
                                "quantityInput": {
                                    "color": "#000000",
                                    "border-color": "#000000"
                                }
                            }
                        }
                    }
                });
                return;
            }

            var client = window.ShopifyBuy.buildClient({
                domain: 'lazaridis-students-society-2.myshopify.com',
                storefrontAccessToken: '3ba9a63766a1ae0ae326a50a33305c23',
            });

            window.ShopifyBuy.UI.onReady(client).then(function (ui) {
                shopifyUI = ui;
                window.shopifyUIInstance = ui;
                ui.createComponent('collection', {
                    id: '160853000265',
                    node: document.getElementById('collection-component-1737836124841'),
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
                        "product": {
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "calc(33.33% - 20px)",
                                        "margin-left": "20px",
                                        "margin-bottom": "50px",
                                        "width": "calc(33.33% - 20px)",
                                        "min-height": "400px",
                                        "position": "relative"
                                    },
                                    "img": {
                                        "height": "calc(100% - 15px)",
                                        "position": "absolute",
                                        "left": "0",
                                        "right": "0",
                                        "top": "0"
                                    },
                                    "imgWrapper": {
                                        "padding-top": "calc(75% + 15px)",
                                        "position": "relative",
                                        "height": "0"
                                    },
                                    "title": {
                                        "min-height": "60px",
                                        "display": "flex",
                                        "align-items": "center",
                                        "justify-content": "center",
                                        "text-align": "center",
                                        "margin-bottom": "10px",
                                        "padding": "0 10px"
                                    },
                                    "button": {
                                        "position": "absolute",
                                        "bottom": "0",
                                        "left": "50%",
                                        "transform": "translateX(-50%)",
                                        "width": "calc(100% - 20px)"
                                    }
                                },
                                "title": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-size": "19px",
                                    "color": "#000000"
                                },
                                "button": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#8e63c5"
                                    },
                                    "background-color": "#9e6edb",
                                    ":focus": {
                                        "background-color": "#8e63c5"
                                    },
                                    "border-radius": "9px",
                                    "padding-left": "46px",
                                    "padding-right": "46px"
                                },
                                "quantityInput": {
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px"
                                },
                                "price": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "color": "#000000"
                                },
                                "compareAt": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "color": "#000000"
                                },
                                "unitPrice": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "color": "#000000"
                                }
                            },
                            "buttonDestination": "modal",
                            "contents": {
                                "options": false
                            },
                            "text": {
                                "button": "View Product"
                            },
                            "googleFonts": [
                                "Montserrat"
                            ]
                        },
                        "productSet": {
                            "styles": {
                                "products": {
                                    "@media (min-width: 601px)": {
                                        "margin-left": "-20px"
                                    }
                                }
                            }
                        },
                        "modalProduct": {
                            "contents": {
                                "img": false,
                                "imgWithCarousel": true
                            },
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "100%",
                                        "margin-left": "0px",
                                        "margin-bottom": "0px"
                                    }
                                },
                                "button": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#8e63c5"
                                    },
                                    "background-color": "#9e6edb",
                                    ":focus": {
                                        "background-color": "#8e63c5"
                                    },
                                    "border-radius": "9px",
                                    "padding-left": "46px",
                                    "padding-right": "46px"
                                },
                                "quantityInput": {
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px"
                                },
                                "title": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "26px",
                                    "color": "#4c4c4c"
                                },
                                "price": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "18px",
                                    "color": "#4c4c4c"
                                },
                                "compareAt": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "15.299999999999999px",
                                    "color": "#4c4c4c"
                                },
                                "unitPrice": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "15.299999999999999px",
                                    "color": "#4c4c4c"
                                },
                                "description": {
                                    "font-family": "Montserrat, sans-serif"
                                }
                            },
                            "googleFonts": [
                                "Montserrat"
                            ],
                            "text": {
                                "button": "Add to Cart"
                            }
                        },
                        "option": {
                            "styles": {
                                "label": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold"
                                },
                                "select": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold"
                                }
                            },
                            "googleFonts": [
                                "Montserrat"
                            ]
                        },
                        "cart": {
                            "styles": {
                                "button": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#8e63c5"
                                    },
                                    "background-color": "#9e6edb",
                                    ":focus": {
                                        "background-color": "#8e63c5"
                                    },
                                    "border-radius": "9px"
                                },
                                "title": { "color": "#000000" },
                                "header": { "color": "#000000" },
                                "lineItems": { "color": "#000000" },
                                "subtotalText": { "color": "#000000" },
                                "subtotal": { "color": "#000000" },
                                "notice": { "color": "#000000" },
                                "currency": { "color": "#000000" },
                                "close": {
                                    "color": "#000000",
                                    ":hover": { "color": "#000000" }
                                },
                                "empty": { "color": "#000000" },
                                "noteDescription": { "color": "#000000" },
                                "discountText": { "color": "#000000" },
                                "discountIcon": { "fill": "#000000" },
                                "discountAmount": { "color": "#000000" }
                            },
                            "text": {
                                "total": "Subtotal",
                                "button": "Checkout"
                            },
                            "googleFonts": ["Montserrat"]
                        },
                        "toggle": {
                            "styles": {
                                "toggle": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "background-color": "#9e6edb",
                                    ":hover": {
                                        "background-color": "#8e63c5"
                                    },
                                    ":focus": {
                                        "background-color": "#8e63c5"
                                    }
                                },
                                "count": {
                                    "font-size": "14px"
                                }
                            },
                            "googleFonts": ["Montserrat"]
                        },
                        "lineItem": {
                            "styles": {
                                "variantTitle": { "color": "#000000" },
                                "title": { "color": "#000000" },
                                "price": { "color": "#000000" },
                                "fullPrice": { "color": "#000000" },
                                "discount": { "color": "#000000" },
                                "discountIcon": { "fill": "#000000" },
                                "quantity": { "color": "#000000" },
                                "quantityIncrement": {
                                    "color": "#000000",
                                    "border-color": "#000000"
                                },
                                "quantityDecrement": {
                                    "color": "#000000",
                                    "border-color": "#000000"
                                },
                                "quantityInput": {
                                    "color": "#000000",
                                    "border-color": "#000000"
                                }
                            }
                        }
                    }
                });
            });
        }

        function loadScript() {
            // Check if script is already loaded
            if (document.querySelector('script[src*="buy-button-storefront"]')) {
                if (window.ShopifyBuy) {
                    if (window.ShopifyBuy.UI) {
                        ShopifyBuyInit();
                    }
                }
                return;
            }

            const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
            const script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            script.onload = ShopifyBuyInit;
            script.onerror = (error) => {
                console.error('Error loading Shopify script:', error);
            };
            document.getElementsByTagName('head')[0].appendChild(script);
        }

        // Start the initialization process
        if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
                ShopifyBuyInit();
            } else {
                loadScript();
            }
        } else {
            loadScript();
        }

        // Cleanup function
        return () => {
            try {
                if (shopifyUI) {
                    try {
                        shopifyUI.destroyComponent('collection');
                    } catch (e) {
                        console.warn('Error destroying collection component:', e);
                    }
                }

                // Safely remove iframes
                try {
                    const iframes = document.querySelectorAll('iframe[id^="ShopifyOnline"]');
                    if (iframes) {
                        iframes.forEach(iframe => {
                            if (iframe && iframe.parentNode) {
                                iframe.parentNode.removeChild(iframe);
                            }
                        });
                    }
                } catch (e) {
                    console.warn('Error removing Shopify iframes:', e);
                }

                // Safely remove Shopify elements
                try {
                    const shopifyElements = document.querySelectorAll('[id^="shopify-"]');
                    if (shopifyElements) {
                        shopifyElements.forEach(element => {
                            if (element && element.parentNode) {
                                element.parentNode.removeChild(element);
                            }
                        });
                    }
                } catch (e) {
                    console.warn('Error removing Shopify elements:', e);
                }
            } catch (e) {
                console.warn('Error during cleanup:', e);
            }
        };
    }, []);

    return (
        <div className="shopify-page events">
            <div className="shopify-content">
                <h1>Events</h1>
                <div id="collection-component-1737836124841"></div>
            </div>
            <Footer />
        </div>
    );
};

export default Events; 
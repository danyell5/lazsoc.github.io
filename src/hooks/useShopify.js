import { useState, useEffect } from 'react';
import { getShopifyUI } from '../utils/shopifyLoader';

export const useShopify = (collectionId, containerId) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const initializeShopify = async () => {
            try {
                const ui = await getShopifyUI();
                if (!isMounted) return;

                // Clean up any existing instances
                try {
                    ui.destroyComponent('collection');
                } catch (e) {
                    console.warn('Error destroying existing collection:', e);
                }

                // Create new component
                ui.createComponent('collection', {
                    id: collectionId,
                    node: document.getElementById(containerId),
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

                setIsReady(true);
            } catch (error) {
                console.error('Error initializing Shopify:', error);
            }
        };

        initializeShopify();

        return () => {
            isMounted = false;
            if (window.shopifyUIInstance) {
                try {
                    window.shopifyUIInstance.destroyComponent('collection');
                } catch (e) {
                    console.warn('Error destroying Shopify component:', e);
                }
            }
        };
    }, [collectionId, containerId]);

    return isReady;
}; 
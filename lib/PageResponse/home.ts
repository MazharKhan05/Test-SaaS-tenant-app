
export const homeDescription = {
    "id": "01HE3RKGN9YB1YZTK07BPTRK7Z",
    "websiteId": "01HDS3Q6WYZZJ35CKCCDNWDCPM",
    "route": "/",
    "languageCode": "en",
    "content": {
        "title": "Home Page",
        "sections": [
            {
                "id": "section-1",
                "components": [
                    {
                        "type": "COMPLEX_COMPONENT",
                        "name": "Prayer Schedule",
                        "data": {
                            "id": "prayer-schedule",
                            "title": {
                                "id": "header",
                                "text": "Prayer Timings",
                                "type": "HEADER"
                            },
                            "date": {
                                "id": "span",
                                "text": "",
                                "type": "SPAN"
                            },
                            "scheduleTable": {
                                "id": "table",
                                "tableHead": {
                                    "id": "table-head",
                                    "type": "THEAD",
                                    "row": [
                                        {
                                            "id": "table-head-row",
                                            "tableHeader": [
                                                {
                                                    "id": "header-col-1",
                                                    "text": "Prayer-Name"
                                                },
                                                {
                                                    "id": "header-col-2",
                                                    "text": "Azan-TImings"
                                                },
                                                {
                                                    "id": "header-col-3",
                                                    "text": "Iqamah-TImings"
                                                }
                                            ],
                                            "tableData": []
                                        }
                                    ]
                                },
                                "tableBody": {
                                    "id": "table-body",
                                    "type": "TBODY",
                                    "row": [
                                        {
                                            "id": "table-data-row-1",
                                            "tableHeader": [],
                                            "tableData": []
                                        },
                                        {
                                            "id": "table-data-row-2",
                                            "tableHeader": [],
                                            "tableData": []
                                        },
                                        {
                                            "id": "table-data-row-3",
                                            "tableHeader": [],
                                            "tableData": []
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    {
                        "type": "BLOCK_COMPONENT",
                        "name": "Search Section",
                        "data": {
                            "id": "search-section",
                            "orgCategorySearchInput": {
                                "id": "search",
                                "searchInput": {
                                    "id": "search-input-1",
                                    "text": "",
                                    "placeHolder": "Find(Orgs or Category)...",
                                    "isRequired": true,
                                    "inputType": "TEXT"
                                },
                                "searchResultSet": {
                                    "id": "search-result-set-1",
                                    "searchResults": [
                                        {
                                            "id": "search-result-1",
                                            "resultName": {
                                                "id": "paragraph",
                                                "text": "This is a herosection paragraph",
                                                "type": "PARAGRAPH"
                                            },
                                            "resultId": {
                                                "id": "span",
                                                "text": "This is a span",
                                                "type": "SPAN"
                                            }
                                        }
                                    ]
                                }
                            },
                            "geoLocSearchInput": {
                                "id": "search-2",
                                "searchInput": {
                                    "id": "search-input-2",
                                    "text": "",
                                    "placeHolder": "Near(Continent,Country or City)...",
                                    "isRequired": true,
                                    "inputType": "TEXT"
                                },
                                "searchResultSet": {
                                    "id": "search-result-set-2",
                                    "searchResults": [
                                        {
                                            "id": "search-result-1",
                                            "resultName": {
                                                "id": "paragraph",
                                                "text": "This is a herosection paragraph",
                                                "type": "PARAGRAPH"
                                            },
                                            "resultId": {
                                                "id": "span",
                                                "text": "This is a span",
                                                "type": "SPAN"
                                            }
                                        }
                                    ]
                                }
                            },
                            "searchButton": {
                                "id": "search-button",
                                "label": "Go",
                                "redirectTo": "#"
                            }
                        }
                    }
                ]
            },
            {
                "id": "section-2",
                "components": [
                    {
                        "type": "BLOCK_COMPONENT",
                        "name": "Feature Cards",
                        "data": {
                            "id": "feature-cards",
                            "featureCards": [
                                {
                                    "id": "feature-card-1",
                                    "image": {
                                        "id": "image",
                                        "url": "https://s3.amazonaws.com/images.masjid.net/website%2301HDT904JTJ3D5KBVPRVSW1Z54/01HET57SH0KMKPCYGRE0MQ10KD.jpg",
                                        "alt": "Image"
                                    },
                                    "contentCard": {
                                        "id": "content-card",
                                        "header": {
                                            "id": "header",
                                            "text": "Masjid 1",
                                            "type": "HEADER"
                                        },
                                        "paragraph": {
                                            "id": "paragraph",
                                            "text": "Architectural Wonder",
                                            "type": "PARAGRAPH"
                                        }
                                    }
                                },
                                {
                                    "id": "feature-card-2",
                                    "image": {
                                        "id": "image",
                                        "url": "https://s3.amazonaws.com/images.masjid.net/website%2301HDT904JTJ3D5KBVPRVSW1Z54/01H6XH2FT4WJ12E37934E2MXH5.jpeg",
                                        "alt": "Image"
                                    },
                                    "contentCard": {
                                        "id": "content-card",
                                        "header": {
                                            "id": "header",
                                            "text": "Jama Masjid",
                                            "type": "HEADER"
                                        },
                                        "paragraph": {
                                            "id": "paragraph",
                                            "text": "Sanctuary of Peace and place of Reflection",
                                            "type": "PARAGRAPH"
                                        }
                                    }
                                },
                                {
                                    "id": "feature-card-3",
                                    "image": {
                                        "id": "image",
                                        "url": "https://s3.amazonaws.com/images.masjid.net/website%2301HDT904JTJ3D5KBVPRVSW1Z54/01H6XKFPKQP9BE1ER8T9DTJR41.jpeg",
                                        "alt": "Image"
                                    },
                                    "contentCard": {
                                        "id": "content-card",
                                        "header": {
                                            "id": "header",
                                            "text": "Masjid Al Nabwi",
                                            "type": "HEADER"
                                        },
                                        "paragraph": {
                                            "id": "paragraph",
                                            "text": "Masjid al-Nabawi is the second holiest mosque in Islam after the Masjid al-Haram in Mecca. It encompasses the tomb of the Prophet Muhammad.",
                                            "type": "PARAGRAPH"
                                        }
                                    }
                                }
                            ],
                            "isAdjacent": true
                        }
                    },
                    {
                        "type": "BLOCK_COMPONENT",
                        "name": "Hero Section",
                        "data": {
                            "id": "hero-section",
                            "image": {
                                "id": "image",
                                "url": "https://s3.amazonaws.com/images.masjid.net/website%2301HDS3Q6WYZZJ35CKCCDNWDCPM/01HFH51W3W58BQ2NNPGSB7GRYD.jpeg",
                                "alt": "Image"
                            },
                            "heroSectionContent": {
                                "id": "hero-section-content",
                                "header": {
                                    "id": "header",
                                    "text": "Services Offered By Us.",
                                    "type": "HEADER"
                                },
                                "paragraph": {
                                    "id": "paragraph",
                                    "text": "The Islamic Center of Frisco was established in May 2007. We are located approximately 27 miles north of downtown Dallas. Along with providing daily prayer facilities, ICF also offers various Islamic education services including our successful Quran Academy, Sunday School, and Safwah Seminary educational programs, a vibrant youth group, educational seminars, youth and adult education classes, summer school, nikkah services, and Islamic counseling.",
                                    "type": "PARAGRAPH"
                                },
                                "button": {
                                    "id": "btn",
                                    "label": "Get Started",
                                    "redirectTo": "#"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "id": "section-3",
                "components": [
                    {
                        "type": "BLOCK_COMPONENT",
                        "name": "Subscribe To Newsletter",
                        "data": {
                            "id": "subscribe-to-newsletter",
                            "introTextContent": {
                                "id": "jumbotron",
                                "title": {
                                    "id": "header",
                                    "text": "Subscribe to our newsletter",
                                    "type": "HEADER"
                                },
                                "description": {
                                    "id": "paragraph",
                                    "text": "Stay updated with the latest news and features from frisco masjid. for regular updates delivered to your inbox.",
                                    "type": "PARAGRAPH"
                                }
                            },
                            "form": {
                                "id": "form",
                                "inputGroups": [
                                    {
                                        "id": "input-group-1",
                                        "label": {
                                            "id": "label-1",
                                            "text": "First name",
                                            "type": "LABEL"
                                        },
                                        "input": {
                                            "id": "input-1",
                                            "text": "",
                                            "placeHolder": "Enter first name...",
                                            "isRequired": true,
                                            "inputType": "TEXT"
                                        }
                                    },
                                    {
                                        "id": "input-group-2",
                                        "label": {
                                            "id": "label-2",
                                            "text": "Last name",
                                            "type": "LABEL"
                                        },
                                        "input": {
                                            "id": "input-2",
                                            "text": "",
                                            "placeHolder": "Enter last name...",
                                            "isRequired": true,
                                            "inputType": "TEXT"
                                        }
                                    },
                                    {
                                        "id": "input-group-3",
                                        "label": {
                                            "id": "label-3",
                                            "text": "Email",
                                            "type": "LABEL"
                                        },
                                        "input": {
                                            "id": "input-3",
                                            "text": "",
                                            "placeHolder": "Enter Email...",
                                            "isRequired": true,
                                            "inputType": "EMAIL"
                                        }
                                    }
                                ],
                                "submitButton": {
                                    "id": "submit-btn",
                                    "label": "Submit",
                                    "redirectTo": "#"
                                }
                            }
                        }
                    }
                ]
            }
        ]
    }
}
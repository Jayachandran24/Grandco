"use strict";
exports.id = 8315;
exports.ids = [8315];
exports.modules = {

/***/ 6516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ parallaxie)
/* harmony export */ });
function parallaxie(selector) {
    let elementBg = document.querySelector(selector);
    let image = elementBg.getAttribute("data-background");
    let position = elementBg.getBoundingClientRect().top * 0.55;
    elementBg.style.backgroundImage = `url("${image}")`;
    elementBg.style.backgroundSize = "cover";
    elementBg.style.backgroundRepeat = "no-repeat";
    elementBg.style.backgroundAttachment = "fixed";
    elementBg.style.backgroundPosition = `center ${position}px`;
    window.onscroll = ()=>{
        let elements = document.querySelectorAll(".parallaxie[data-background]");
        elements.forEach((element)=>{
            position = element.getBoundingClientRect().top * 0.55;
            element.style.backgroundPosition = `center ${position}px`;
        });
    };
}


/***/ }),

/***/ 380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Project_Description)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/project/description.json
const description_namespaceObject = JSON.parse('{"W":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part.","R":[{"numb":"01","title":"Project research","details":"No coding skills required to customize and create unique looks."},{"numb":"02","title":"Sketches and design","details":"No coding skills required to customize and create unique looks."},{"numb":"03","title":"Seleted concept","details":"No coding skills required to customize and create unique looks."}]}');
;// CONCATENATED MODULE: ./src/components/Project/Description/index.jsx


const Description = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "intro-section section-padding pt-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-md-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "htit",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "02 ."
                                        }),
                                        " Description"
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8 offset-lg-1 col-md-8 mb-30",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "fz-18 fw-300",
                                    children: description_namespaceObject.W
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "features-process position-re mt-50",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: description_namespaceObject.R.map((feature, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "fz-40 mr-30 lf-culm",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "numb",
                                                    children: feature.numb
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "cont",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "mb-10 fw-600",
                                                        children: feature.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: feature.details
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, idx))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "circle-pattern bottom right"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Project_Description = (Description);


/***/ }),

/***/ 2215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Project_Details)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/project/details.json
const details_namespaceObject = JSON.parse('{"Oc":"Build it beautiful","TN":"The most exquisite agency for provide branding services.","Wc":["img/portfolio/project2/b1.jpg","img/portfolio/project2/b2.jpg","img/portfolio/project2/b1.jpg"]}');
;// CONCATENATED MODULE: ./src/components/Project/Details/index.jsx
/* eslint-disable @next/next/no-img-element */ 

const Details = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "projdtal section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container-xxl",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center mb-80",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "sub-title gr-purple-red-text inline",
                                    children: details_namespaceObject.Oc
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: details_namespaceObject.TN
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: details_namespaceObject.Wc.map((image, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "",
                                    src: image
                                })
                            })
                        }, idx))
                })
            ]
        })
    });
};
/* harmony default export */ const Project_Details = (Details);


/***/ }),

/***/ 799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Project_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/project/header.json
const header_namespaceObject = JSON.parse('{"Lp":"Envato.com","hT":"6 August 2019","bd":["Web Design","WordPress"],"pJ":["Minimal","Modern","Design"]}');
;// CONCATENATED MODULE: ./src/components/Project/Header/index.jsx


const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "works-header bg-img parallaxie d-flex align-items-end",
        style: {
            backgroundImage: "url('img/portfolio/project2/bg.jpg')"
        },
        "data-overlay-dark": "4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-7 col-md-9",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cont mb-40",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "art & illustration"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Inspiring new space."
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item mt-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        children: "Client"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            children: header_namespaceObject.Lp
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item mt-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: header_namespaceObject.hT
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item mt-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        children: "Categories"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: header_namespaceObject.bd.map((category, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                children: [
                                                    category,
                                                    idx !== header_namespaceObject.bd.length - 1 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                        children: " ,"
                                                    }) : null
                                                ]
                                            }, idx))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item mt-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        children: "Tags"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: header_namespaceObject.pJ.map((tags, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                children: [
                                                    tags,
                                                    idx !== header_namespaceObject.pJ.length - 1 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                        children: " , "
                                                    }) : null
                                                ]
                                            }, idx))
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Project_Header = (Header);


/***/ }),

/***/ 5802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Project_Intro)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slidedown"
var external_react_slidedown_ = __webpack_require__(172);
;// CONCATENATED MODULE: ./src/data/project/accordions.json
const accordions_namespaceObject = JSON.parse('[{"id":1,"title":"Website & Mobile App Design","details":"Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.","closed":true},{"id":2,"title":"Motion Graphics & Animation","details":"Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.","closed":false},{"id":3,"title":"User Experience","details":"Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.","closed":true}]');
;// CONCATENATED MODULE: ./src/components/Project/Intro/index.jsx





const Intro = ()=>{
    const { 0: accordions , 1: setAccordions  } = (0,external_react_.useState)(accordions_namespaceObject);
    const openAccordion = (e)=>{
        document.querySelectorAll(".accordion.bord .item").forEach((accordion)=>accordion.classList.remove("active"));
        let item = e.target.closest(".item");
        item.classList.add("active");
        let newAccordions = accordions.map((accordion, idx)=>{
            if (item.id.split("-")[1] == idx) accordion.closed = false;
            else accordion.closed = true;
            return accordion;
        });
        setAccordions(newAccordions);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 col-md-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "htit",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "01 ."
                                    }),
                                    " Introduction"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 offset-lg-1 col-md-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text js-scroll__content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "fz-18 fw-300",
                                    children: "We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "accordion bord mt-50",
                                    children: accordions.map((accordion, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `item ${idx == 1 ? "active" : ""}`,
                                            id: `accordion-${idx}`,
                                            onClick: openAccordion,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "fz-15",
                                                            children: accordion.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "ico"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_slidedown_.SlideDown, {
                                                    className: "accordion-info active",
                                                    closed: accordion.closed,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: accordion.details
                                                    })
                                                })
                                            ]
                                        }, idx))
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Project_Intro = (Intro);


/***/ }),

/***/ 6364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const NextPrev = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "nex-prv",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "prv",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "img bg-img",
                    style: {
                        backgroundImage: "url('img/portfolio/project2/bg.jpg')"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/project-details",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: "Colorful Small Cards"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sub-title",
                                    children: "Prev Project"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "overly gr-purple-red-bg"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "nxt",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "img bg-img",
                    style: {
                        backgroundImage: "url('img/portfolio/project2/bg1.jpg')"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/project-details",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: "Bright Captive"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sub-title",
                                    children: "Next Project"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "overly gr-purple-red-bg"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextPrev);


/***/ }),

/***/ 7536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_parallaxie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6516);





const Video = ()=>{
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        new _common_parallaxie__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(".video-wrapper.bg-img.parallaxie");
    }, []);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "video-wrapper section-padding bg-img parallaxie valign",
                    "data-background": "img/portfolio/project2/bg1.jpg",
                    "data-overlay-dark": "4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "full-width text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "vid",
                            href: "https://vimeo.com/127203262",
                            onClick: openVideo,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "vid-butn",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "icon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fas fa-play"
                                    })
                                })
                            })
                        })
                    })
                })
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);


/***/ })

};
;
"use strict";
exports.id = 9686;
exports.ids = [9686];
exports.modules = {

/***/ 9514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Corporate_Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/corporate/blog.json
const blog_namespaceObject = JSON.parse('[{"bg":"img/blog/b/v1.jpg","tag":"Tranding","date":"14 sep 2021","title":"ways to quickly increase traffic to your website","image":"img/blog/a1.jpg","author":"Chris Pratt"},{"bg":"img/blog/b/v2.jpg","tag":"Tranding","date":"14 sep 2021","title":"ways to quickly increase traffic to your website","image":"img/blog/a1.jpg","author":"Chris Pratt"}]');
;// CONCATENATED MODULE: ./src/components/Corporate/Blog/index.jsx
/* eslint-disable @next/next/no-img-element */ 


const Blog = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "round-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    className: "ls2 text-u fz-12 mb-15",
                                    children: [
                                        "Our Blogs ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "fw-700",
                                    children: "Latest News"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: blog_namespaceObject.map((blog, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "item side-img stwo box-shadow radius-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-5 rest",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img bg-img",
                                                style: {
                                                    backgroundImage: `url('${blog.bg}')`
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/blog-grid-clean",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "gat",
                                                            children: blog.tag
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-7 valign",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "full-width",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "date text-u fz-13 fw-500 gr-sunrise-text mb-10",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: blog.date
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: "fw-700 line-height-30 mb-10",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog-side-img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: blog.title
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "info flex",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "author flex",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "flex-img",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "author-img circle-50 mr-15",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: blog.image,
                                                                                    alt: ""
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "flex-cont valign",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "fz-12 opacity-8",
                                                                                        children: "Written By :"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                        className: "fz-16",
                                                                                        children: blog.author
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }, idx))
                })
            ]
        })
    });
};
/* harmony default export */ const Corporate_Blog = (Blog);


/***/ }),

/***/ 7408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_footers_main_footer_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3930);
/* eslint-disable @next/next/no-img-element */ 


const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "footer-half pb-100 pt-100",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "left-half",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "sub-title gr-sunrise-text",
                                    children: "Stay Connected"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "fz-30 fw-700 mb-30",
                                    children: "Let’s build the next big thing together"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/contact-creative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "butn butn-lg gr-sunrise-bg text-light radius-30",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text words chars splitting",
                                            "data-splitting": true,
                                            children: "Get In Touch"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "right-half",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "clumn",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "logo mb-30",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "landing-preview.html",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "img/logo-light.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "We create digital experiences for brands and companies by using technology."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "social circle-bord mt-30",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "rest horizontal-link fz-12",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: _data_footers_main_footer_json__WEBPACK_IMPORTED_MODULE_2__/* .social_links.facebook */ .FK.qv,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fab fa-facebook-f"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: _data_footers_main_footer_json__WEBPACK_IMPORTED_MODULE_2__/* .social_links.twitter */ .FK.km,
                                                                    className: "ms-2",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fab fa-twitter"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: _data_footers_main_footer_json__WEBPACK_IMPORTED_MODULE_2__/* .social_links.youtube */ .FK.ZB,
                                                                    className: "ms-2",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fab fa-youtube"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "clumn",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "title mb-30",
                                                    children: "About Us"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "cmp-links rest",
                                                    children: _data_footers_main_footer_json__WEBPACK_IMPORTED_MODULE_2__/* .links.map */ .Ok.map((link, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "mb-10",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: link.url,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    children: link.title
                                                                })
                                                            })
                                                        }, idx))
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "clumn",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    className: "title mb-30",
                                                    children: "Office"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "address rest",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "adrs underline mb-15",
                                                            children: _data_footers_main_footer_json__WEBPACK_IMPORTED_MODULE_2__/* .address */ .Lk
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "eml",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#0",
                                                                children: _data_footers_main_footer_json__WEBPACK_IMPORTED_MODULE_2__/* .email */ .Do
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "tel gr-sunrise-text",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                className: "fw-700",
                                                                children: _data_footers_main_footer_json__WEBPACK_IMPORTED_MODULE_2__/* .phone */ .m7
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 3930:
/***/ ((module) => {

module.exports = JSON.parse('{"FK":{"qv":"https://www.facebook.com/Grandco-101187061352022/?modal=admin_todo_tour","km":"https://twitter.com/Grandco5","CR":"https://www.instagram.com/grandco_1/","ZB":"https://www.youtube.com/"},"Ok":[{"title":"Company","url":"/coming-soon"},{"title":"Affiliates","url":"#"},{"title":"Services","url":"/coming-soon"},{"title":"Products","url":"/products"}],"aC":[{"url":"/","image":"img/blog/c1.jpg","title":"E-Invoicing","date":"October 12, 2019"},{"url":"/","image":"img/blog/c3.jpg","title":"A way to success for small business or startup companies","date":"September 6, 2019"},{"url":"/","image":"img/blog/c1.jpg","title":"Professional Invoice Solution For Freelancers","date":"August 20, 2019"}],"Lk":"Canada -  Unit 4   677 Romaine St Peterborough ON, K9J 2E6","Do":"info@grandco.ca","m7":"+1 888 241 6017"}');

/***/ })

};
;
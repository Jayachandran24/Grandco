"use strict";
exports.id = 8716;
exports.ids = [8716];
exports.modules = {

/***/ 1263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8636);
/* harmony import */ var _data_corporate_clients_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__]);
swiper_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-img-element */ 



const Brands = ({ additionalClass , lineHead  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `clients-carsouel ${additionalClass ? additionalClass : "mt-60"}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                    id: "content-carousel-container-unq-2",
                    className: "swiper-container",
                    slidesPerView: 5,
                    spaceBetween: 0,
                    speed: 1000,
                    loop: true,
                    breakpoints: {
                        0: {
                            slidesPerView: 3
                        },
                        640: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 5
                        }
                    },
                    children: _data_corporate_clients_json__WEBPACK_IMPORTED_MODULE_3__.map((brand, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: brand.image,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#0",
                                                className: "link",
                                                "data-splitting": true,
                                                children: brand.title
                                            })
                                        })
                                    ]
                                })
                            })
                        }, idx))
                }),
                lineHead ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "line-head mb-0 mt-60",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        children: "+4000 Customers trust of us from 12 countries"
                    })
                }) : null
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brands);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Corporate_Services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/corporate/services.json
const services_namespaceObject = JSON.parse('[{"icon":"img/icons/analysis.png","title":"Free Analysis","description":"Not sure if you are getting the best offer?  Let our experts provide a no obligation review and report on where your merchant services stands with the competition","srdescription":"Not sure if you are getting the best offer?  Let our experts provide a no obligation review and report on where your merchant services stands with the competition"},{"icon":"img/icons/business.png","title":"Dummy","classname":"text-transparent","description":"A stand alone terminal with great rates is an outdated solution.  Business owners want more and deserve more in a merchant program.  Grandco solutions take your business to the next level","srdescription":"A stand alone terminal with great rates is an outdated solution.  Business owners want more and deserve more in a merchant program.  Grandco solutions take your business to the next level"},{"icon":"img/icons/partner.png","title":"Software Partnerships","description":"Are you adding payment solutions to your software that are overcharging your customers 3% and higher and waiting days for their funds?  Contact Grandco for a new way to integrate your software with our easy-to-use API’s and revenue sharing model to add additional revenue streams to your company","srdescription":"Are you adding payment solutions to your software that are overcharging your customers 3% and higher and waiting days for their funds?  Contact Grandco for a new way to integrate your software with our easy-to-use API’s and revenue sharing model to add additional revenue streams to your company"}]');
;// CONCATENATED MODULE: ./src/components/Corporate/Services/index.jsx
/* eslint-disable @next/next/no-img-element */ 

const Services = ({ services: isServicesPage  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `services section-padding ${isServicesPage ? "pb-0" : "pt-0"}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "round-head text-center mb-80",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                className: "ls2 text-u fz-12 mb-15",
                                children: [
                                    "Solutions",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row serv-row",
                    children: services_namespaceObject.map((service, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item text-center padding-rl-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "icon-img-70 m-auto mb-40",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: service.icon,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-15 fz-20 fw-600",
                                        children: service.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: isServicesPage ? service.srdescription : service.description
                                    })
                                ]
                            })
                        }, idx))
                })
            ]
        })
    });
};
/* harmony default export */ const Corporate_Services = (Services);


/***/ }),

/***/ 1297:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_corporate_testimonials_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-img-element */ 





const Testimonials = ({ additionalClass , services  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `testimonials corp ${services ? "" : "pt-80"} ${additionalClass ? additionalClass : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-img bg-fixed",
                        style: {
                            backgroundImage: "url('img/testimonials/bg.jpg')"
                        },
                        "data-overlay-dark": "4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "play-button",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "https://youtu.be/AzwC6umvd1s",
                                className: "btn vid",
                                onClick: openVideo,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        width: "100px",
                                        height: "100px",
                                        viewBox: "0 0 100 100",
                                        preserveAspectRatio: "none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                            className: "circle",
                                            cx: "50",
                                            cy: "50",
                                            r: "48",
                                            stroke: "white",
                                            strokeWidth: "2",
                                            fill: "none"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fas fa-play"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-testim",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                    className: "swiper-container swiper-testim",
                                    speed: 1000,
                                    slidesPerView: 1,
                                    loop: true,
                                    children: _data_corporate_testimonials_json__WEBPACK_IMPORTED_MODULE_4__.map((testimonial, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".6s",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: testimonial.text
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info flex mt-50",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "author-img valign",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "circle",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: testimonial.image,
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "author-info valign",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "full-width",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                                className: "fz-12 fw-700 text-u ls1 gr-sunrise-text mb-5",
                                                                                children: testimonial.author.name
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "fz-12",
                                                                                children: testimonial.author.position
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, idx))
                                })
                            })
                        })
                    })
                ]
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ }),

/***/ 5926:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"img/brands/01-brands.svg","title":"www.Ravo.com"},{"image":"img/brands/02-brands.svg","title":"www.Ravo.com"},{"image":"img/brands/03-brands.svg","title":"www.Ravo.com"},{"image":"img/brands/04-brands.svg","title":"www.Ravo.com"},{"image":"img/brands/05-brands.svg","title":"www.Ravo.com"},{"image":"img/brands/06-brands.svg","title":"www.Ravo.com"}]');

/***/ }),

/***/ 5818:
/***/ ((module) => {

module.exports = JSON.parse('[{"text":"I dont know what else to say. This is something you haven’t seen before. Unique design, high performance and outstanding support!","image":"img/testimonials/01.jpg","author":{"name":"Tom Cruise","position":"Envato Author"}},{"text":"I dont know what else to say. This is something you haven’t seen before. Unique design, high performance and outstanding support!","image":"img/testimonials/01.jpg","author":{"name":"Tom Cruise","position":"Envato Author"}},{"text":"I dont know what else to say. This is something you haven’t seen before. Unique design, high performance and outstanding support!","image":"img/testimonials/01.jpg","author":{"name":"Tom Cruise","position":"Envato Author"}}]');

/***/ })

};
;
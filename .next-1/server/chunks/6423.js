"use strict";
exports.id = 6423;
exports.ids = [6423];
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

/***/ 6423:
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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _common_parallaxie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6516);
/* harmony import */ var _data_business_testimonials_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2702);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 







swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Controller
]);
const Testimonials = ({ curve  })=>{
    const galleryThumbs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const galleryTop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const navigationPrevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const navigationNextRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        galleryThumbs.current.controller.control = galleryTop.current;
        galleryTop.current.controller.control = galleryThumbs.current;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        new _common_parallaxie__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(".testimonials.bg-img.parallaxie");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "testimonials slider-thumbs section-padding pb-0 bg-img parallaxie",
        "data-background": curve ? "https://images.pexels.com/photos/6567737/pexels-photo-6567737.jpeg" : "img/background/14.jpg",
        "data-overlay-dark": "6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row justify-content-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "round-head text-center mb-50"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-8 col-md-10",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                        className: "swiper-container gallery-top",
                                        speed: 350,
                                        spaceBetween: 10,
                                        loop: false,
                                        loopedSlides: 1,
                                        navigation: {
                                            prevEl: navigationPrevRef.current,
                                            nextEl: navigationNextRef.current
                                        },
                                        onBeforeInit: (swiper)=>{
                                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                                            swiper.params.navigation.nextEl = navigationNextRef.current;
                                        },
                                        onSwiper: (swiper)=>{
                                            galleryTop.current = swiper;
                                            setTimeout(()=>{
                                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                                swiper.params.navigation.nextEl = navigationNextRef.current;
                                                swiper.navigation.destroy();
                                                swiper.navigation.init();
                                                swiper.navigation.update();
                                            });
                                        },
                                        children: _data_business_testimonials_json__WEBPACK_IMPORTED_MODULE_4__/* .galleryTop.map */ .l.map((slide, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "fz-20",
                                                                children: slide.content
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info mt-30",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "mb-5 text-u ls2 fw-700",
                                                                    children: slide.author.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: slide.author.position
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, idx))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                        className: "swiper-container gallery-thumbs",
                                        speed: 500,
                                        spaceBetween: 10,
                                        slidesPerView: 3,
                                        centeredSlides: true,
                                        slideToClickedSlide: true,
                                        loop: true,
                                        touchRatio: 0.2,
                                        loopedSlides: 4,
                                        onSwiper: (swiper)=>{
                                            galleryThumbs.current = swiper;
                                        }
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            curve ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "curve-top",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    preserveAspectRatio: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1920",
                    height: "217",
                    viewBox: "0 0 1920 217",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        fillRule: "evenodd",
                        transform: "matrix(-1 0 0 1 1920 0)",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M0,57.46875 C203.364583,135.217754 494.835938,156.564108 874.414062,121.507813 C1192.61198,-13.9827666 1541.14063,-35.3291208 1920,57.46875 L1920,207 L0,207 L0,57.46875 Z",
                                opacity: ".3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M0,79 C292.46875,165.453125 612.46875,165.453125 960,79 C1307.53125,-7.453125 1627.53125,-7.453125 1920,79 L1920,207 L0,207 L0,79 Z",
                                opacity: ".6"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M0,89 C288.713542,146.786458 608.713542,146.786458 960,89 C1311.28646,31.2135417 1631.28646,31.2135417 1920,89 L1920,217 L0,217 L0,89 Z"
                            })
                        ]
                    })
                })
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2702:
/***/ ((module) => {

module.exports = JSON.parse('{"l":[{"content":"Our business is built on keeping our customers up and running – that’s why we’ve partnered with Grandco for so long. Whenever called upon, whether for new services or assistance with existing terminals, the Grandco support team has always been prompt, reliable and effective in keeping us up and running.      ","author":{"name":"Geoff Bourdeau","position":"CEO of a multi location flooring company. Grandco customer since 2013"}}]}');

/***/ })

};
;
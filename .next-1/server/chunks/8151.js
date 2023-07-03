"use strict";
exports.id = 8151;
exports.ids = [8151];
exports.modules = {

/***/ 8151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Corporate_Process)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/corporate/process.json
const process_namespaceObject = JSON.parse('[{"numb":"01","title":"Merchants","description":"True end to end merchant solutions under one bill with a dedicated support team member to keep you at the forefront of payment technology","srdescription":"True end to end merchant solutions under one bill with a dedicated support team member to keep you at the forefront of payment technology"},{"numb":"02","title":"Software Providers","description":"Contact Grandco today to see how our payment services gives you an advantage over your competitors to drive more sales","srdescription":"NContact Grandco today to see how our payment services gives you an advantage over your competitors to drive more sales"},{"numb":"03","title":"Affiliates","description":"Everyone wants more money and has limited time, see how Grandco’s monthly residual programs can change your life and give you the freedom you desire and the income to do it","srdescription":"Everyone wants more money and has limited time, see how Grandco’s monthly residual programs can change your life and give you the freedom you desire and the income to do it"}]');
;// CONCATENATED MODULE: ./src/components/Corporate/Process/index.jsx


const Process = ({ services  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `features-process section-padding position-re ${services ? "pb-50 bg-gray-light" : "pt-0"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: process_namespaceObject.map((step, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "fz-40 mr-20 lf-culm",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "numb",
                                            children: step.numb
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "mb-10 fz-20 fw-600",
                                                children: step.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: services ? step.srdescription : step.description
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, idx))
                })
            }),
            services ? null : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "circle-pattern bottom right"
            })
        ]
    });
};
/* harmony default export */ const Corporate_Process = (Process);


/***/ })

};
;
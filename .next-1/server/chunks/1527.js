"use strict";
exports.id = 1527;
exports.ids = [1527];
exports.modules = {

/***/ 1527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Countdown)
/* harmony export */ });
function Countdown() {
    document.addEventListener("readystatechange", (event)=>{
        if (event.target.readyState === "complete") {
            var clockdiv = document.getElementsByClassName("clockdiv");
            var countDownDate = new Array();
            for(var i = 0; i < clockdiv.length; i++){
                countDownDate[i] = new Array();
                countDownDate[i]["el"] = clockdiv[i];
                countDownDate[i]["time"] = new Date(clockdiv[i].getAttribute("data-date")).getTime();
                countDownDate[i]["days"] = 0;
                countDownDate[i]["hours"] = 0;
                countDownDate[i]["seconds"] = 0;
                countDownDate[i]["minutes"] = 0;
            }
            var countdownfunction = setInterval(function() {
                for(var i = 0; i < countDownDate.length; i++){
                    var now = new Date().getTime();
                    var distance = countDownDate[i]["time"] - now;
                    countDownDate[i]["days"] = Math.floor(distance / (1000 * 60 * 60 * 24));
                    countDownDate[i]["hours"] = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                    countDownDate[i]["minutes"] = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
                    countDownDate[i]["seconds"] = Math.floor(distance % (1000 * 60) / 1000);
                    if (distance < 0) {
                        countDownDate[i]["el"].querySelector(".days").innerHTML = 0;
                        countDownDate[i]["el"].querySelector(".hours").innerHTML = 0;
                        countDownDate[i]["el"].querySelector(".minutes").innerHTML = 0;
                        countDownDate[i]["el"].querySelector(".seconds").innerHTML = 0;
                    } else {
                        countDownDate[i]["el"].querySelector(".days").innerHTML = countDownDate[i]["days"];
                        countDownDate[i]["el"].querySelector(".hours").innerHTML = countDownDate[i]["hours"];
                        countDownDate[i]["el"].querySelector(".minutes").innerHTML = countDownDate[i]["minutes"];
                        countDownDate[i]["el"].querySelector(".seconds").innerHTML = countDownDate[i]["seconds"];
                    }
                }
            }, 1000);
        }
    });
}


/***/ })

};
;
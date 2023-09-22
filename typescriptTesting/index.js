"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Fixing the Website
var enums_js_1 = require("./enums.js");
var utils_js_1 = require("./utils.js");
var utils_js_2 = require("./utils.js");
var footerElement = document.querySelector(".footer");
var revSecton = document.querySelector(".reviews");
var getReview = document.querySelector("#getReview");
var container = document.querySelector(".container");
var PropertyContainer = document.querySelector(".properties");
var currentLocation = ["Islamabad", "09:31", 32];
var ADMIN = "admin";
var READ_ONLY = "read_only";
var isloggedIn = true;
var authorityStatus;
//object reviews
var reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: enums_js_1.USERLEVEL.GOLD_USER,
        date: "01-04-2021",
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: enums_js_1.USERLEVEL.BRONZE_USER,
        date: "28-03-2021",
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: enums_js_1.USERLEVEL.SILVER_USER,
        date: "27-03-2021",
    },
    {
        name: "qasim",
        stars: 3.5,
        loyaltyUser: enums_js_1.USERLEVEL.GOLD_USER,
        date: "1-02-2022",
    },
];
//object you
var you = {
    userName: "Muhammad",
    isReturning: true,
    lastName: "Suleman",
    permissions: enums_js_1.PERMISSIONS.ADMIN,
    age: 23,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
//objectProperties
var properties = [
    {
        image: "./img/a.jpg",
        title: "Soan garden",
        price: 45,
        contact: [2312327537, "abc@gmail.com"],
        isAvailable: true,
        location: {
            firstLine: "House23,st#1,A-Block",
            city: "Islamabad",
            country: "Pakistan",
            code: 14221,
        },
    },
    {
        image: "./img/b.jpg",
        title: "PWD",
        price: 35,
        contact: [2312327537, "hrjrc@gmail.com"],
        isAvailable: false,
        location: {
            firstLine: "House11,st#6,B-Block",
            city: "Rawalpindi",
            country: "Pakistan",
            code: 14231,
        },
    },
    {
        image: "./img/c.jpg",
        title: "Jinnah Garden",
        price: 30,
        contact: [23644137, "ahrac@gmail.com"],
        isAvailable: true,
        location: {
            firstLine: "House89,st#23,D-Block",
            city: "Peshawar",
            country: "Pakistan",
            code: 90232,
        },
    },
    {
        image: "./img/d.jpg",
        title: "Police Foundation",
        price: 35,
        contact: [953153, "jecaa@gmail.com"],
        isAvailable: false,
        location: {
            firstLine: "House112,st#90,N-Block",
            city: "Quetta",
            country: "America",
            code: 96423,
        },
    },
];
//functions
// ...
var count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        var topTwo = (0, utils_js_1.getTopTwoReviews)(array);
        for (var i = 0; i < topTwo.length; i++) {
            var card = document.createElement("div");
            card.classList.add("review-card");
            card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
            revSecton.appendChild(card);
        }
        container.removeChild(getReview);
    }
}
//function calls
(0, utils_js_2.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_js_2.populateUser)(you.isReturning, you.userName);
//Add properties dynamically
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = properties[i].title;
    var image_1 = document.createElement("img");
    image_1.setAttribute("src", properties[i].image);
    image_1.width = 150;
    image_1.height = 100;
    card.appendChild(image_1);
    PropertyContainer.appendChild(card);
    (0, utils_js_2.showDetails)(isloggedIn, card, properties[i].price);
}
//add time location to footer
footerElement.innerHTML =
    currentLocation[0] + " | " + currentLocation[1] + " | " + currentLocation[2];
getReview.addEventListener("click", function () {
    addReviews(reviews);
});
//classes
var MainProperty = /** @class */ (function () {
    function MainProperty(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
    return MainProperty;
}());
var myMainProperty = new MainProperty("./img/a.jpg", "Soan Gardens", [
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: enums_js_1.USERLEVEL.BRONZE_USER,
        date: "28-03-2021",
    },
]);
var mainImageContainer = document.querySelector(".main-image");
var image = document.createElement("img");
image.setAttribute("src", myMainProperty.src);
image.width = 150;
image.height = 100;
mainImageContainer.appendChild(image);

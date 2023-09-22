// Fixing the Website
import { PERMISSIONS, USERLEVEL } from "./enums.js";
import { Review, Property } from "./interfaces.js";
import { Price, Country } from "./types.js";
import { getTopTwoReviews } from "./utils.js";
import { showReviewTotal, populateUser, showDetails } from "./utils.js";


const footerElement = document.querySelector(".footer") as HTMLDivElement;
const revSecton = document.querySelector(".reviews") as HTMLDivElement;
const getReview = document.querySelector("#getReview") as HTMLButtonElement;
const container = document.querySelector(".container") as HTMLDivElement;
const PropertyContainer = document.querySelector(".properties") as HTMLHeadingElement;

let currentLocation: [string, string, number] = ["Islamabad", "09:31", 32];

const ADMIN = "admin";
const READ_ONLY = "read_only";

let isloggedIn = true;
let authorityStatus: any;

//object reviews
const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: USERLEVEL.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: USERLEVEL.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: USERLEVEL.SILVER_USER,
    date: "27-03-2021",
  },
  {
    name: "qasim",
    stars: 3.5,
    loyaltyUser: USERLEVEL.GOLD_USER,
    date: "1-02-2022",
  },
];
//object you

const you = {
  userName: "Muhammad",
  isReturning: true,
  lastName: "Suleman",
  permissions: PERMISSIONS.ADMIN,
  age: 23,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

//objectProperties

const properties: Property[] = [
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
let count = 0;
function addReviews(array: Review[]): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
      revSecton.appendChild(card);
    }
    container.removeChild(getReview);
  }
}

//function calls
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.userName,);

//Add properties dynamically
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img");
  image.setAttribute("src", properties[i].image);
  image.width = 150;
  image.height = 100;
  card.appendChild(image);
  PropertyContainer.appendChild(card);
  showDetails(isloggedIn, card, properties[i].price);
}
//add time location to footer
footerElement.innerHTML =
  currentLocation[0] + " | " + currentLocation[1] + " | " + currentLocation[2];
getReview.addEventListener("click", () => {
  addReviews(reviews);
});

//classes
class MainProperty {
  src: string;
  title: string;
  reviews: Review[];

  constructor(src: string, title: string, reviews: Review[]) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
  }
}

let myMainProperty = new MainProperty("./img/a.jpg", "Soan Gardens", [
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: USERLEVEL.BRONZE_USER,
    date: "28-03-2021",
  },
]);
const mainImageContainer = document.querySelector(".main-image");
const image = document.createElement("img");
image.setAttribute("src", myMainProperty.src);
image.width = 150;
image.height = 100;
mainImageContainer.appendChild(image);

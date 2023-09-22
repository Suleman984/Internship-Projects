//import functions.js
import { add } from "./functions.js";
//firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const addBtnEl = document.getElementById("add-btn");

//appsettings
const appSettings = {
  databaseURL: "https://mrfoodie-bce7a-default-rtdb.firebaseio.com/",
};
//
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

//add data to firebase
const inputFieldEl = document.getElementById("input-field");
let shoppingListEl = document.getElementById("shopping-list");
addBtnEl.addEventListener("click", () => {
  let inputVal = inputFieldEl.value;
  push(shoppingListInDB, inputVal);
  clearInputField();
});
onValue(shoppingListInDB, function (snapshot) {
    clearShoppingList();
    if(snapshot.exists()){
    let Fruits = Object.values(snapshot.val());
    let FruitsId = Object.keys(snapshot.val());
    for (let i = 0; i < Fruits.length; i++) {
      const  currentFruit = Fruits[i];
      const  currentFruitId=FruitsId[i];
      appendItemToShoppingList(currentFruit,currentFruitId);
    }
}
else{
    let msg="Nothing to add";
    shoppingListEl.innerHTML=`<strong>${msg}</strong>`;
}
  });

//clear Input Field
function clearInputField() {
  inputFieldEl.value = "";
}
//clear Shopping List
function clearShoppingList() {
  shoppingListEl.innerHTML = "";
}
//appendItem to shoppingList
function appendItemToShoppingList(curItem,curItemId){
    let newEl=document.createElement("li");
    newEl.textContent=curItem;
    newEl.addEventListener('click',()=>{
        console.log(curItem+" , "+curItemId);
        let exactLoctionOfItem=ref(database,`shoppingList/${curItemId}`);
        remove(exactLoctionOfItem);
    })
    shoppingListEl.append(newEl);

    // shoppingListEl.innerHTML += `<li>${curItem}</li>`;
}
//get Data from database



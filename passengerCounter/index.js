let incButton = document.getElementById("inc-btn");
let saveButton = document.getElementById("save-btn");
let psgCounter = document.getElementById("psg-counter");
let saved = document.getElementById("saved");
let counter = 0;
let Savedtext="Previous";
incButton.addEventListener("click", () => {
  counter++;
  psgCounter.textContent = counter;
});
saveButton.addEventListener("click", () => {
    if(counter==0){
        saved.textContent=Savedtext+counter;
        console.log("Hello");
    }else{
        saved.textContent=saved.textContent+" - "+counter;
        counter=0;
        psgCounter.textContent=counter;
    }
});

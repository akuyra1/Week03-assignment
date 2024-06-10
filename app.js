//get the DOM elements
const biscuitImage = document.getElementById("biscuit");
const counterDisplay = document.getElementById("biscuit-counter");
//grab the table where all purchased biscuit makers will be shown and how much bps they make
const workForce = document.querySelector(".users-work-force");
const workForceRows = document.querySelectorAll(".users-work-force tr th");

const buyBtn1 = document.getElementById("cottage-buy-btn");
const cottageMakerCell = document.getElementById("cottage-quantity");
const cottageQuantity = document.getElementById("first");

const buyBtn2 = document.getElementById("homestead-buy-btn");
const homesteadMakerCell = document.getElementById("homestead-quantity");
const homesteadQuantity = document.getElementById("second");

const buyBtn3 = document.getElementById("artisan-buy-btn");
const artisanMakerCell = document.getElementById("artisan-quantity");
const artisanQuantity = document.getElementById("third");

const buyBtn4 = document.getElementById("family-buy-btn");
const familyMakerCell = document.getElementById("family-quantity");
const familyQuantity = document.getElementById("fourth");

const buyBtn5 = document.getElementById("neighborhood-buy-btn");
const neighborhoodMakerCell = document.getElementById("neighborhood-quantity");
const neighborhoodQuantity = document.getElementById("fith");

const resetBtn = document.getElementById("reset-btn");

let counter = 0; // Start cookies count at zero
let bps = 1;
let cottagePurchaseCounter = 0;
let homesteadPurchaseCounter = 0;
let artisanPurchaseCounter = 0;
let familyPurchaseCounter = 0;
let neighborhoodPurchaseCounter = 0;
let canPurchase = false;


//all the functions that work are stored here======================================================
cottagePurchaseTrackerFunction();
homesteadPurchaseTrackerFunction();
artisanPurchaseTrackerFunction();
familyPurchaseTrackerFunction();
neighborhoodPurchaseTrackerFunction();
//==================================================================================================


// BpS function ====================
function BpsCounter() {
  bps = 1 + (cottagePurchaseCounter * biscuitMakers[0].bps) + (homesteadPurchaseCounter * biscuitMakers[1].bps) + (artisanPurchaseCounter * biscuitMakers[2].bps) + (familyPurchaseCounter * biscuitMakers[3].bps) + (neighborhoodPurchaseCounter * biscuitMakers[4].bps)
}
//==================================


//======================================Biscuit counter ============================================

setInterval(function () { //every second counter increases by 1 and shows it to the user.
    counter = counter + bps;
    counterDisplay.textContent = counter
    BpsCounter()
    }, 1000); // 1000 milliseconds == 1 second

    biscuitImage.addEventListener("click", function() {
        counter++;
        counterDisplay.textContent = counter
    })
//====================================================================================================

    // Manufacturing of the biscuits user can buy for automation of biscuits
let biscuitMakers = [
    {
    id: 1,
    name: "Cottage Cookie Creations",
    bps: 1,
    price: 25,
    },
    {
    id: 2,
    name: "Homestead Biscuit Bakery",
    bps: 2,
    price: 100,
    },
    {
    id: 3,
    name: "Artisan Biscuit Works",
    bps: 3,
    price: 300,
    },
    {
    id: 4,
    name: "Family Biscuit Factory",
    bps: 4,
    price: 400,
    },
    {
    id: 5,
    name: "Neighborhood Biscuitery",
    bps: 5,
    price: 500,
    },
    
]
//array to keep track of how many manufacturers user has bought for when page reloads it can be retrieved with the counter
const manufacturersTracker = [
  {
    name: "cottage",
    quantity: "",
  }
];

function buyCottage(){
  counter = counter - 25;
  cottagePurchaseCounter = cottagePurchaseCounter +1;
  cottageMakerCell.textContent = biscuitMakers[0].bps * cottagePurchaseCounter
  cottageQuantity.textContent = cottagePurchaseCounter;
  // manufacturersTracker[0].quantity++;
  console.log(manufacturersTracker)
}

//make functions that shows how many biscuit manufacturers you have bought and the amount of BpS they are producing   ===================
function cottagePurchaseTrackerFunction() {
  if(buyBtn1) { 
    buyBtn1.addEventListener("click", () => {
       if(counter >= 25) {
        buyCottage();
    }})
  } 
}
function homesteadPurchaseTrackerFunction() {
  if (buyBtn2) {
    buyBtn2.addEventListener("click", () => {
    if(counter >= 100) {
      counter = counter -100
      homesteadPurchaseCounter = (homesteadPurchaseCounter +1);
      // bps = biscuitMakers[1].bps
      // console.log(homesteadPurchaseCounter);
      homesteadMakerCell.textContent = biscuitMakers[1].bps * homesteadPurchaseCounter
      homesteadQuantity.textContent = homesteadPurchaseCounter;
      console.log(bps)
      // console.log(homesteadQuantity)
    }})
  }
} 
function artisanPurchaseTrackerFunction() {
  if (buyBtn3) {
    buyBtn3.addEventListener("click", () => {
        if(counter >= 300) {
          counter = counter - 300;
          artisanPurchaseCounter = (artisanPurchaseCounter +1);
          // bps = biscuitMakers[1].bps
          // console.log(homesteadPurchaseCounter);
          artisanMakerCell.textContent = biscuitMakers[2].bps * artisanPurchaseCounter
          artisanQuantity.textContent = artisanPurchaseCounter;
          console.log(bps)
          // console.log(homesteadQuantity)
    }})
  }
} 
function familyPurchaseTrackerFunction() {
  if (buyBtn4) {
    buyBtn4.addEventListener("click", () => {
      if(counter >= 400) {
        counter = counter - 400;
        familyPurchaseCounter = (familyPurchaseCounter +1);
        // bps = biscuitMakers[1].bps
        // console.log(homesteadPurchaseCounter);
        familyMakerCell.textContent = biscuitMakers[3].bps * familyPurchaseCounter
        familyQuantity.textContent = familyPurchaseCounter;
        console.log(bps)
        // console.log(homesteadQuantity)
    }})
  }
} 
function neighborhoodPurchaseTrackerFunction() {
  if (buyBtn5) {
    buyBtn5.addEventListener("click", () => {
      if(counter >= 500) {
        counter = counter - 500;
        neighborhoodPurchaseCounter = (neighborhoodPurchaseCounter +1);
        // bps = biscuitMakers[1].bps
        // console.log(homesteadPurchaseCounter);
        neighborhoodMakerCell.textContent = biscuitMakers[4].bps * neighborhoodPurchaseCounter
        neighborhoodQuantity.textContent = neighborhoodPurchaseCounter;
        console.log(bps)
        // console.log(homesteadQuantity)
    }})
  }
} 

//========================================================================================================================================
//Reset button function 
function resetGame() {
  counter = 0;
  localStorage.removeItem("counter");
  localStorage.removeItem("cottage")

  neighborhoodQuantity.textContent = "";
  neighborhoodMakerCell.textContent = "";

  familyQuantity.textContent = "";
  familyMakerCell.textContent = "";

  artisanQuantity.textContent = "";
  artisanMakerCell.textContent = "";

  homesteadQuantity.textContent = "";
  homesteadMakerCell.textContent = "";

  cottageQuantity.textContent = "";
  cottageMakerCell.textContent = "";
}

resetBtn.addEventListener("click", () => {
  resetGame();
})
//========================================================================================================================================
//Saving all game data into Local Storage with interval.

let retrievedCounter = localStorage.getItem("counter");
let retrievedCottage = localStorage.getItem("cottage")
  setInterval(function () { 
    localStorage.setItem("counter", counter)
    localStorage.setItem("cottage", manufacturersTracker[0].quantity)
    cottageMakerCell.textContent = cottageQuantity.textContent;
    localStorage.setItem("cottage", manufacturersTracker[0].quantity)
    manufacturersTracker[0].quantity = (cottageQuantity.textContent);
    // cottageQuantity.textContent = manufacturersTracker[0].quantity;
    // cottageMakerCell.textContent = manufacturersTracker[0].quantity;
    console.log(cottageQuantity)

    // BpsCounter()
    }, 1000); // 1000 milliseconds == 1 second
  counter += Number(retrievedCounter);
  cottageMakerCell += Number(retrievedCottage);
  // cottageQuantity.textContent += Number(retrievedCottage);
  // Save all purchased biscuit manufacturers into the local storage and retrieve it upon page reload.  
  //========================================================================================================================================


















// WHERE I LEFT OFF BEFORE LEAVING THE PC
//   1) TRYING TO MAKE COST OF PURCHASE REFLECT WHETHER OR NOT USER CAN BUY THE MANUFACTURER HE WANTS
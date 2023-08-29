//Team A

//+ btn
let pointsHolder = document.getElementById("pointsNumber")
let incrementBtn = 0
let saveBtn = document.getElementById("save-btn")
let saveHolder = document.getElementById("count-el")
let pointsIncrement = 0
let pointsGained = 0

function increment() {
    incrementBtn = incrementBtn + 1
    updatePointsDisplay()
    //pointsHolder.innerText = incrementBtn   
}

//2-points btn
let twoMultiples = document.getElementById ("pointsNumber")

function twomultiples(){
    pointsIncrement = pointsIncrement + 2
    //twoMultiples.innerText = pointsIncrement
    updatePointsDisplay()

}

//4-points btn
let fourMultiples = document.getElementById ("pointsNumber")

function fourmultiples(){
    pointsGained = pointsGained + 4
    updatePointsDisplay()

}

// display
function updatePointsDisplay() {
   pointsHolder.innerText = incrementBtn + pointsIncrement + pointsGained;
}

//save btn

function save(){
        let saveIncrement = incrementBtn + pointsIncrement + pointsGained  + " - "
        saveHolder.textContent += saveIncrement
        pointsHolder.innerText = 0
        incrementBtn = 0
         pointsIncrement = 0
         twoMultiples.innerText = 0
         pointsGained = 0
         fourMultiples.innerText = 0

        //console.log(saveHolder)
}




//Team B

let goalHolder = document.getElementById("goalNumber")
let gainBtn = 0
let markBtn = document.getElementById("mark-btn")
let markHolder = document.getElementById("count-em")
let goalIncrement = 0
let goalGained = 0

 //+ btn
function gain(){
    gainBtn += 1
    updateGoalDisplay()
}

// gain()

 //2-points btn
let doubleMultiples = document.getElementById("goalNumber")

function doublemultiples() {
    goalIncrement += 2
    updateGoalDisplay()
}

//4-points btn
let quadMultiples = document.getElementById("goalNumber")
function quadmultiples() {
    goalGained += 4
    updateGoalDisplay()
}

//display
function updateGoalDisplay() {
    goalHolder.innerText = gainBtn + goalIncrement + goalGained
}

function mark(){
        let markIncrement = gainBtn + goalIncrement + goalGained + " - " 
        markHolder.textContent += markIncrement
        goalHolder.innerText = 0
        gainBtn = 0
        goalIncrement = 0
        doubleMultiples.innerText = 0
        goalGained = 0
        quadMultiples.innerText = 0

        //console.log(markHolder)
}
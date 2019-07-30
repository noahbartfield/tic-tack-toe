// Create a grid of nine boxes
// When any box is clicked a red X appears
// When the next box is clicked a Blue O appears
// #1 and #2 are repeated until a row of 3 of the same character is created
// When a win happens:
// Alert the players who won
// Disallow any further clicks on the game board
// Display a Play Again button that resets the game
// For a tie:
// Alert players that game has ended in a tie
// Display a Play Again button that resets the game



// const winConditionO1 = winConditionsO.box1 + winConditionsO.box2 + winConditionsO.box3
// const winConditionO2 = winConditionsO.box4 + winConditionsO.box5 + winConditionsO.box6
// const winConditionO3 = winConditionsO.box7 + winConditionsO.box8 + winConditionsO.box9
// const winConditionO4 = winConditionsO.box1 + winConditionsO.box4 + winConditionsO.box7
// const winConditionO5 = winConditionsO.box2 + winConditionsO.box5 + winConditionsO.box8
// const winConditionO6 = winConditionsO.box3 + winConditionsO.box6 + winConditionsO.box9
// const winConditionO7 = winConditionsO.box1 + winConditionsO.box5 + winConditionsO.box9
// const winConditionO8 = winConditionsO.box3 + winConditionsO.box5 + winConditionsO.box7

// const winConditionX1 = winConditionsO.box1 + winConditionsO.box2 + winConditionsO.box3
// const winConditionX2 = winConditionsO.box4 + winConditionsO.box5 + winConditionsO.box6
// const winConditionX3 = winConditionsO.box7 + winConditionsO.box8 + winConditionsO.box9
// const winConditionX4 = winConditionsO.box1 + winConditionsO.box4 + winConditionsO.box7
// const winConditionX5 = winConditionsO.box2 + winConditionsO.box5 + winConditionsO.box8
// const winConditionX6 = winConditionsO.box3 + winConditionsO.box6 + winConditionsO.box9
// const winConditionX7 = winConditionsO.box1 + winConditionsO.box5 + winConditionsO.box9
// const winConditionX8 = winConditionsO.box3 + winConditionsO.box5 + winConditionsO.box7


const winConditionsX = {
    box1: 0,
    box2: 0,
    box3: 0,
    box4: 0,
    box5: 0,
    box6: 0,
    box7: 0,
    box8: 0,
    box9: 0,
}

const winConditionsO = {
    box1: 0,
    box2: 0,
    box3: 0,
    box4: 0,
    box5: 0,
    box6: 0,
    box7: 0,
    box8: 0,
    box9: 0,
}

const boxes = document.querySelectorAll(".box")
const playAgainButton = document.querySelector(".playAgain")
const blueWinResults = document.querySelector("#blueWinResults")
const redWinResults = document.querySelector("#redWinResults")

let i = 0
const incrementID = () => {
    i++
    return i
}
let blueWinsCounter = 0
const incrementBlueWins = () => {
    blueWinsCounter++
    return blueWinsCounter
}

let redWinsCounter = 0
const incrementRedWins = () => {
    redWinsCounter++
    return redWinsCounter
}


boxes.forEach(box => {
    box.addEventListener("click", () => {
        const targetLocationID = parseInt(event.target.id)
        const redX = redFactory()
        const blueO = blueFactory()
        if (box.innerHTML === "" && (i + 10) % 2 === 0 && blueWinsCounter === 0 && redWinsCounter === 0) {
            box.innerHTML = redX
            incrementID()
            winConditionsX[`box${targetLocationID}`] += 1
        } else if (box.innerHTML === "" && (i + 10) % 2 !== 0 && blueWinsCounter === 0 && redWinsCounter === 0) {
            box.innerHTML = blueO
            incrementID()
            winConditionsO[`box${targetLocationID}`] += 1         
        }

        if (winConditionsO.box1 + winConditionsO.box2 + winConditionsO.box3 === 3 || winConditionsO.box4 + winConditionsO.box5 + winConditionsO.box6 === 3 || winConditionsO.box7 + winConditionsO.box8 + winConditionsO.box9 === 3 || winConditionsO.box1 + winConditionsO.box4 + winConditionsO.box7 === 3 || winConditionsO.box2 + winConditionsO.box5 + winConditionsO.box8 === 3 || winConditionsO.box3 + winConditionsO.box6 + winConditionsO.box9 === 3 || winConditionsO.box1 + winConditionsO.box5 + winConditionsO.box9 === 3 || winConditionsO.box3 + winConditionsO.box5 + winConditionsO.box7 === 3) {
            
 
            winConditionsO.box1 = 0
            winConditionsO.box2 = 0
            winConditionsO.box3 = 0
            winConditionsO.box4 = 0
            winConditionsO.box5 = 0
            winConditionsO.box6 = 0
            winConditionsO.box7 = 0
            winConditionsO.box8 = 0
            winConditionsO.box9 = 0
            winConditionsX.box1 = 0
            winConditionsX.box2 = 0
            winConditionsX.box3 = 0
            winConditionsX.box4 = 0
            winConditionsX.box5 = 0
            winConditionsX.box6 = 0
            winConditionsX.box7 = 0
            winConditionsX.box8 = 0
            winConditionsX.box9 = 0
            confirm("Blue Wins! Play Again?")
            incrementBlueWins()

            // if (confirm("Blue Wins! Play Again?")){
            //     incrementBlueWins()

            //     blueWinResults.innerHTML = `
            //     <section>
            //         <h4>Blue Wins: ${blueWinsCounter}</h4>
            //     </section>
            //     `
            // }
        } else if (winConditionsX.box1 + winConditionsX.box2 + winConditionsX.box3 === 3 || winConditionsX.box4 + winConditionsX.box5 + winConditionsX.box6 === 3 || winConditionsX.box7 + winConditionsX.box8 + winConditionsX.box9 === 3 || winConditionsX.box1 + winConditionsX.box4 + winConditionsX.box7 === 3 || winConditionsX.box2 + winConditionsX.box5 + winConditionsX.box8 === 3 || winConditionsX.box3 + winConditionsX.box6 + winConditionsX.box9 === 3 || winConditionsX.box1 + winConditionsX.box5 + winConditionsX.box9 === 3 || winConditionsX.box3 + winConditionsX.box5 + winConditionsX.box7 === 3) {

            winConditionsO.box1 = 0
            winConditionsO.box2 = 0
            winConditionsO.box3 = 0
            winConditionsO.box4 = 0
            winConditionsO.box5 = 0
            winConditionsO.box6 = 0
            winConditionsO.box7 = 0
            winConditionsO.box8 = 0
            winConditionsO.box9 = 0
            winConditionsX.box1 = 0
            winConditionsX.box2 = 0
            winConditionsX.box3 = 0
            winConditionsX.box4 = 0
            winConditionsX.box5 = 0
            winConditionsX.box6 = 0
            winConditionsX.box7 = 0
            winConditionsX.box8 = 0
            winConditionsX.box9 = 0
            confirm("Red Wins! Play Again?")
            incrementRedWins()
 
            
        } else if (winConditionsO.box1 + winConditionsO.box2 + winConditionsO.box3 + winConditionsO.box4 + winConditionsO.box5 + winConditionsO.box6 + winConditionsO.box7 + winConditionsO.box8 + winConditionsO.box9 + winConditionsX.box1 + winConditionsX.box2 + winConditionsX.box3 + winConditionsX.box4 + winConditionsX.box5 + winConditionsX.box6 + winConditionsX.box7 + winConditionsX.box7 + winConditionsX.box8 + winConditionsX.box9 === 9) {
            confirm("TIE! Play Again?")
            winConditionsO.box1 = 0
            winConditionsO.box2 = 0
            winConditionsO.box3 = 0
            winConditionsO.box4 = 0
            winConditionsO.box5 = 0
            winConditionsO.box6 = 0
            winConditionsO.box7 = 0
            winConditionsO.box8 = 0
            winConditionsO.box9 = 0
            winConditionsX.box1 = 0
            winConditionsX.box2 = 0
            winConditionsX.box3 = 0
            winConditionsX.box4 = 0
            winConditionsX.box5 = 0
            winConditionsX.box6 = 0
            winConditionsX.box7 = 0
            winConditionsX.box8 = 0
            winConditionsX.box9 = 0
        }

    })
});

const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const box4 = document.querySelector(".box4")
const box5 = document.querySelector(".box5")
const box6 = document.querySelector(".box6")
const box7 = document.querySelector(".box7")
const box8 = document.querySelector(".box8")
const box9 = document.querySelector(".box9")



playAgainButton.addEventListener("click", () => {
    blueWinsCounter = 0
    redWinsCounter = 0
    winConditionsO.box1 = 0
    winConditionsO.box2 = 0
    winConditionsO.box3 = 0
    winConditionsO.box4 = 0
    winConditionsO.box5 = 0
    winConditionsO.box6 = 0
    winConditionsO.box7 = 0
    winConditionsO.box8 = 0
    winConditionsO.box9 = 0
    winConditionsX.box1 = 0
    winConditionsX.box2 = 0
    winConditionsX.box3 = 0
    winConditionsX.box4 = 0
    winConditionsX.box5 = 0
    winConditionsX.box6 = 0
    winConditionsX.box7 = 0
    winConditionsX.box8 = 0
    winConditionsX.box9 = 0
    box1.innerHTML = ""
    box2.innerHTML = ""
    box3.innerHTML = ""
    box4.innerHTML = ""
    box5.innerHTML = ""
    box6.innerHTML = ""
    box7.innerHTML = ""
    box8.innerHTML = ""
    box9.innerHTML = ""
})

const redFactory = () => {
    return `
    <h1 class="redX">X</h1>
    `
}

const blueFactory = () => {
    return `
    <h1 class="blueO">O</h1>
    `
}




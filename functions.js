//select tags
const number = document.querySelector(".number"); 
const bet = document.querySelector(".bet");
const btnAdd = document.querySelector(".btn-add");
const btnOrder = document.querySelector(".btn-order")
const output = document.querySelector(".listOutput")
const totalOutput = document.querySelector(".total")
const ulOutput = document.querySelector(".listOutput")

//Event creation
btnAdd.addEventListener("click", addNumbers);
btnOrder.addEventListener("click", addOrder);

//arrays 
let orderArray = []
let holdArray = [];

//objects

function orderMaker(){
  this.selection = [];
}


function numberBet(number, bet) {
  this.number = number
  this.bet = bet
}

function calcTotal(){
let total = parseInt(bet.value);
for(let i = 0; i < holdArray.length; i++) {
  let bet = parseInt(holdArray[i].bet)
  total += bet
}

totalOutput.innerText = total

}



function addNumbers(e){
  e.preventDefault()

  
  const selectedNumber = document.createElement("li");
 
  selectedNumber.innerText = `Number: ${number.value} >`
  ulOutput.appendChild(selectedNumber);
  const selectedBet = document.createElement("i")
  selectedBet.innerText =  `> Bet: ${bet.value} `
  selectedNumber.appendChild(selectedBet);
  output.appendChild(selectedNumber)
  let select = new numberBet (number.value, bet.value);

  calcTotal()
  holdArray.push(select)


}



function addOrder(e){
e.preventDefault()
let order = new orderMaker();
for(let i = 0; i < holdArray.length; i++) {
  order.selection.push(holdArray[i])
}

orderArray.push(order)

holdArray.length = 0
output.innerHTML = '';
totalOutput.innerText = '';
}

 



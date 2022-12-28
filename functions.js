//select tags
const number = document.querySelector(".number"); 
const bet = document.querySelector(".bet");
const btnAdd = document.querySelector(".btn-add");
const btnOrder = document.querySelector(".btn-order")
const output = document.querySelector(".listOutput")

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




function addNumbers(e){
  e.preventDefault()

  const selectionDiv = document.createElement("div");
  const selectedNumber = document.createElement("li");
  selectedNumber.innerText = number.value
  selectionDiv.appendChild(selectedNumber);
  const selectedBet = document.createElement("i")
  selectedBet.innerText = bet.value
  selectionDiv.appendChild(selectedBet);
  output.appendChild(selectionDiv)
  let select = new numberBet (number.value, bet.value);
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
}




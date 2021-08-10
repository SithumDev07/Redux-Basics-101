import { createStore } from "redux";

// we are going to store data in store

const plus = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

const reducer = () => {
  // is a function that modifies our data  

}

const countModifier =  (state) => {
  return state;
}


// const store = createStore(countModifier);
const countStore = createStore(countModifier);

console.log(countStore.getState());;

// let count = 0;
// number.innerText = count;

// const updateText =  () => {
//   number.innerText = count;
// }

// const handleAdd = () => {
//   console.log("add");
//   count++;
//   updateText();
// }

// const handleMinus = () => {
//   count--;
//   updateText();
// }

// plus.addEventListener('click',handleAdd)

// minus.addEventListener('click', handleMinus)
import { createStore } from "redux";

// we are going to store data in store

const plus = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

const countModifier = (state = 0, action) => {
  if(action.type === 'ADD') {
    return state + 1;
  } else if(action.type === 'MINUS') {
    return state -1;
  } else {
    return state;
  }
}
//Reducer is a function that modifies data
// action is the way of we communicate with the modifier


const countStore  = createStore(countModifier);

plus.addEventListener('click',() => {
  countStore.dispatch({type: 'ADD'});
})

minus.addEventListener('click', () => {
  countStore.dispatch({type: 'MINUS'});
})


// console.log(countStore.getState());

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
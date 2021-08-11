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

//Subscribe allows us to listen in changes in store


const countStore  = createStore(countModifier);


const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type: 'ADD'});
}

const handleMinus = () => {
  countStore.dispatch({type: 'MINUS'});
}

plus.addEventListener('click',handleAdd);

minus.addEventListener('click', handleMinus);


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
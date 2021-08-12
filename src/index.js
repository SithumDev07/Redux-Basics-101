import { createStore } from "redux";


const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

//Never mutate State

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, {text: action.text}];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe( () => {
  console.log(store.getState());
} );

// const createTodo = todo => {
//   const li = document.createElement('li');
//   li.innerText = todo;
//   ul.appendChild(li);
// }

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  store.dispatch({ type: ADD_TODO, text: toDo });
}

form.addEventListener('submit', onSubmit);
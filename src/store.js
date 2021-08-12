import { createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addTodo = (text) => {
//   return {
//       type: ADD,
//       text
//   }
// }

// const deleteTodo = (id) => {
//   return {
//       type: DELETE,
//       id: parseInt(id)
//   }
// }

const addTodo = createAction('ADD');
const deleteTodo = createAction('DELETE');

// const reducer = (state = [], action) => {
// switch(action.type) {
//     case addTodo.type:
//         return [{text: action.payload, id: Date.now()}, ...state];
//     case deleteTodo.type:
//         return state.filter(toDo => toDo.id !== action.payload);
//     default:
//         return state;
// }
// }

const reducer = createReducer([], {
    [addTodo]: (state, action) => {
        state.push({text: action.payload, id: Date.now()})
    },
    [deleteTodo]: (state, action) =>
        state.filter(toDo => toDo.id !== action.payload),
})

// const store = createStore(reducer);
const store = configureStore({reducer});
// can use redux dev tools when we use configureStore

export const actionCreators = {
    addTodo,
    deleteTodo
}

export default store;
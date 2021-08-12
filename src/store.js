import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { action } from "commander";

// Vanilla Way
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

//CreateReducer Way
// const addTodo = createAction('ADD');
// const deleteTodo = createAction('DELETE');


//Vanilla Reducer
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


//CreateReducer Way
// const reducer = createReducer([], {
//     [addTodo]: (state, action) => {
//         state.push({text: action.payload, id: Date.now()})
//     },
//     [deleteTodo]: (state, action) =>
//         state.filter(toDo => toDo.id !== action.payload),
// })

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
          state.push({text: action.payload, id: Date.now()})
        },
        remove: (state, action) =>
                state.filter(toDo => toDo.id !== action.payload)
    },
})

// const store = createStore(reducer);
// const store = configureStore({reducer});
const store = configureStore({reducer: toDos.reducer });
// can use redux dev tools when we use configureStore

console.log(toDos.actions);

// Vanilla and createReducer way
// export const actionCreators = {
//     addTodo,
//     deleteTodo
// }

export const { add, remove } = toDos.actions;

export default store;
import { createSlice } from '@reduxjs/toolkit'

// Creating a slice requires a string name to identify the slice, 
// an initial state value, and one or more reducer functions 
// to define how the state can be updated.
const todoSlice = createSlice({
    name: 'todos',
    initialState:[
        // array of objects. Each object represents a todo.
        // {id:1, title: "todo1",completed: false},
        // {id:2, title: "todo2",completed: false},
        // {id:3, title: "todo3",completed: false},
    ],
    reducers:{
        // addTodo reducer is the first reducer to add a todo item.
        addTodo:(state,action)=>{
            // creating our new todo object
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed:false
            };
            // pushing the newly created todo item at the end of our state array.
            state.push(newTodo);
        },
        toggleComplete:(state,action)=>{
            // finding the index of a todo from the state array.
            const index = state.findIndex((todo)=>{
                return todo.id === action.payload.id;
            });
            // update the value of completed property of the todo 
            // whose id matched in the state array.
            state[index].completed = action.payload.completed;
        },
        deleteTodo:(state, action)=>{
            // filtering out all those ids that don't match the payload id
            // Then return a new array.
            return state.filter((todo)=>{
                return todo.id !== action.payload.id;
            });
        }
    }

})
// createSlice function will return some actions.
// and destructurising actions from action object and exporting those actions.
// our reducers and action names are the same.
export const {addTodo,toggleComplete,deleteTodo} = todoSlice.actions;
// we are exporting reducer, as we want to add it to the store.
export default todoSlice.reducer;
import React from 'react';
import { useSelector } from 'react-redux';
const TotalCompleteItems = () => {
	// Allows you to extract data from the Redux store state, using a selector function
	const completedTodos = useSelector((state)=>{
		return state.todos.filter((todo)=>{
			return todo.completed === true;
		})
	});

	return <h4 className='mt-3'>Total Complete Items: {completedTodos.length}</h4>;
};

export default TotalCompleteItems;

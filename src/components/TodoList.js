import React from 'react';
import TodoItem from './TodoItem';
import TotalCompleteItems from './TotalCompleteItems';
import { useSelector } from 'react-redux';
const TodoList = () => {

		// Allows you to extract data from the Redux store state, using a selector function
		const todos = useSelector((state)=>{
			// returning all of our current todos.
			return state.todos;
		});


	return (
			<ul className='list-group'>
				{todos.map((todo) => (
					<TodoItem id={todo.id} key={todo.id} title={todo.title} completed={todo.completed} />
				))}
			</ul>

	);
};

export default TodoList;

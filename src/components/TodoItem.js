import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  // following method will make the task completed.
  const handleCompleteClick = () => {
    // calling the dispatch and passing our action.
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleDeleteClick = ()=>{
    dispatch(
      deleteTodo({
        id:id
      })
    )
  }

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between align-items-center">
          <input type="checkbox" 
          className="" 
          checked={completed}
          onChange={handleCompleteClick}>
          </input>
        {title}
        <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;

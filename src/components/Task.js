import React from "react";

function Task({num, text, category, onDeleteItem}) {
  

 

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text} </div>
      <button className="delete" onClick={()=> onDeleteItem(num)}>X</button>
    </div>
  );
}

export default Task;

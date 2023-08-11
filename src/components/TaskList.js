import React from "react";
import Task from "./Task";
import { useState } from "react";
import { useEffect } from "react";

function TaskList({ tasks }) {

  const [taskData, setTaskData] = useState(tasks)


  useEffect(() => {
    // Update taskData when tasks prop changes
    setTaskData(tasks);
  }, [tasks]);

  function HandleDeleteItem(number) {
    const updateTaskData = taskData.filter((item, index) => {
      return index !== number
    })
    setTaskData(updateTaskData)
  }

  return (
    <div className="tasks">
      {
        taskData.map((item, index) => {
          return < Task key={index} num={index} text={item.text} category={item.category} onDeleteItem={HandleDeleteItem} />
        })
      }
    </div>
  );
}

export default TaskList;

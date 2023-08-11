import React from "react";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [TasksList, setTasksList] = useState(TASKS)

  function HandleCategoryItem(type) {
    if (type === "All") {
      setTasksList(TASKS);
    } else {
      const updateTaskList = TASKS.filter((item) => {
        return item.category === type;
      });
      setTasksList(updateTaskList);
    }
  }

  function HandleNewItem(newItem) {
    setTasksList([...TasksList, newItem])
  }

  console.log(TasksList)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryItem={HandleCategoryItem} />
      <NewTaskForm categories={CATEGORIES} onItemFormSubmit={HandleNewItem} />
      <TaskList tasks={TasksList} />
    </div>
  );
}

export default App;

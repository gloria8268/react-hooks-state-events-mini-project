import React from "react";
import { useState } from "react";

function NewTaskForm({ onItemFormSubmit }) {
  const [newTask, setNewTask] = useState("")
  const [newCategory, setNewCategory] = useState("")

  const handleTextChange = (event) => {
    setNewTask(event.target.value)
  }
  const handleCategoryChange = (event) => {
    setNewCategory(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newItem = {
      text: newTask,
      category: newCategory
    }
    onItemFormSubmit(newItem)
    setNewTask("")
    setNewCategory("")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} />
      </label>

      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form >
  );
}

export default NewTaskForm;

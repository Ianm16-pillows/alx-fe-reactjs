import React, { useState } from 'react'
import { useRecipeStore } from '../store/recipeStore'

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addRecipe({
      id: Date.now(),
      title,
      description
    })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  )
}

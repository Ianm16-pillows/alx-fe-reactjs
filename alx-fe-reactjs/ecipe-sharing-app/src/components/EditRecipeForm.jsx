import React, { useState } from 'react'
import { useRecipeStore } from '../store/recipeStore'

export default function EditRecipeForm({ recipe }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)
  const [title, setTitle] = useState(recipe.title)
  const [description, setDescription] = useState(recipe.description)
  const [editing, setEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    updateRecipe(recipe.id, { title, description })
    setEditing(false)
  }

  if (!editing) {
    return <button onClick={() => setEditing(true)}>Edit</button>
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  )
}

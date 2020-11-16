import React, { useState } from 'react'

import { useNotesStore } from './NotesContext'

const NewNoteForm = () => {
  const [noteText, setNoteText] = useState('')
  const notesStore = useNotesStore()

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={noteText}
        name="noteText"
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button
        title="Add a task"
        type="button"
        onClick={() => {
          noteText !== '' && notesStore.addNote(noteText)
          noteText === '' && alert('Task cannot be empty.')
          setNoteText('')
        }}
      >
        Add
      </button>
    </div>
  )
}

export default NewNoteForm

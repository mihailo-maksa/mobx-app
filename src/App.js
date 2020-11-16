import React from 'react'
import { useObserver } from 'mobx-react'

import { useNotesStore } from './NotesContext'
import NewNoteForm from './NewNoteForm'
import './App.css'

function App() {
  const notesStore = useNotesStore()

  return useObserver(() => (
    <div className="App">
      <h1>MobX Todo App</h1>
      <ul>
        {notesStore.notes.map((note) => (
          <li
            title="Remove task"
            key={note.id}
            onClick={() => notesStore.removeNote(note.id)}
          >
            {note.text}
          </li>
        ))}
      </ul>
      <NewNoteForm />
    </div>
  ))
}

export default App

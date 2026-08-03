import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface Note {
  text: string
  timestamp: string
}

interface NotesState {
  items: Note[]
}

const initialState: NotesState = {
  items: [],
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.items.push(action.payload)
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((_, index) => index !== action.payload)
    },
    loadNotes: (state, action: PayloadAction<Note[]>) => {
      state.items = action.payload
    },
  },
})

export const { addNote, deleteNote, loadNotes } = notesSlice.actions
export default notesSlice.reducer

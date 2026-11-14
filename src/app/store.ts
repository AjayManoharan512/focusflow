import { configureStore } from '@reduxjs/toolkit'
import notesReducer from '../features/notes/notesSlice'
import customersReducer from '../learning/redux-toolkit/customerSlice'

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    customers: customersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

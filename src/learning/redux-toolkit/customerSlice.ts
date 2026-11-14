import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface Customer {
  id: number
  name: string
  email: string
}

interface CustomerState {
  customers: Customer[]
}

const initialState: CustomerState = {
  customers: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ],
}

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.customers.push(action.payload)
    },
    deleteCustomer: (state, action: PayloadAction<number>) => {
      state.customers = state.customers.filter((customer) => customer.id !== action.payload)
    },
  },
})

export const { addCustomer, deleteCustomer } = customerSlice.actions
export default customerSlice.reducer

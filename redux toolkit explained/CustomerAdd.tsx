import { useState } from 'react'
import { useDispatch } from 'react-redux'

import type { AppDispatch } from '../src/app/store'
import { addCustomer, type Customer } from './customerSlice'

function CustomerAdd() {
  const dispatch = useDispatch<AppDispatch>()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()

    if (!trimmedName || !trimmedEmail) {
      return
    }

    const newCustomer: Customer = {
      id: Date.now(),
      name: trimmedName,
      email: trimmedEmail,
    }

    dispatch(addCustomer(newCustomer))
    setName('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
      <div>
        <label htmlFor='customer-name' style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
          Customer Name
        </label>
        <input
          id='customer-name'
          type='text'
          value={name}
          placeholder='Enter customer name'
          onChange={(event) => setName(event.target.value)}
          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db' }}
        />
      </div>

      <div>
        <label htmlFor='customer-email' style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
          Email
        </label>
        <input
          id='customer-email'
          type='email'
          value={email}
          placeholder='Enter customer email'
          onChange={(event) => setEmail(event.target.value)}
          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db' }}
        />
      </div>

      <button
        type='submit'
        style={{
          width: 'fit-content',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '8px',
          background: '#2563eb',
          color: '#fff',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Add Customer
      </button>
    </form>
  )
}

export default CustomerAdd

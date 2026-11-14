import { useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, RootState } from '../src/app/store'
import { deleteCustomer } from './customerSlice'

function CustomerShow() {
  const dispatch = useDispatch<AppDispatch>()
  const customers = useSelector((state: RootState) => state.customers.customers)

  return (
    <div>
      <h3 style={{ marginBottom: '16px' }}>Customer List</h3>

      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
          {customers.map((customer) => (
            <li
              key={customer.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                padding: '12px 14px',
                border: '1px solid #e5e7eb',
                borderRadius: '10px',
                background: '#f9fafb',
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{customer.name}</div>
                <div style={{ color: '#6b7280' }}>{customer.email}</div>
              </div>

              <button
                type='button'
                onClick={() => dispatch(deleteCustomer(customer.id))}
                style={{
                  border: 'none',
                  borderRadius: '8px',
                  background: '#ef4444',
                  color: '#fff',
                  padding: '8px 12px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomerShow

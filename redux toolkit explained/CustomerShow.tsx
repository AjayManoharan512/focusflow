import { useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, RootState } from '../src/app/store'
import { deleteCustomer } from './customerSlice'
import styles from './customerExample.module.scss'

function CustomerShow() {
  const dispatch = useDispatch<AppDispatch>()
  const customers = useSelector((state: RootState) => state.customers.customers)

  return (
    <section className={styles.customerSection} aria-labelledby='customer-list-title'>
      <div className={styles.listHeader}>
        <h3 id='customer-list-title' className={styles.sectionTitle}>Customer list</h3>
        <span className={styles.count}>{customers.length}</span>
      </div>

      {customers.length === 0 ? (
        <p className={styles.emptyState}>No customers yet. Add one using the form above.</p>
      ) : (
        <ul className={styles.customerList}>
          {customers.map((customer) => (
            <li key={customer.id} className={styles.customerRow}>
              <div className={styles.customerDetails}>
                <span className={styles.customerName}>{customer.name}</span>
                <span className={styles.customerEmail}>{customer.email}</span>
              </div>

              <button
                type='button'
                className={styles.deleteButton}
                aria-label={`Delete ${customer.name}`}
                onClick={() => dispatch(deleteCustomer(customer.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default CustomerShow

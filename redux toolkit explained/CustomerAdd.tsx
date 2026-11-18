import { useState } from 'react'
import { useDispatch } from 'react-redux'

import type { AppDispatch } from '../src/app/store'
import { addCustomer, type Customer } from './customerSlice'
import styles from './customerExample.module.scss'

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
    <section className={styles.formSection} aria-labelledby='add-customer-title'>
      <h3 id='add-customer-title' className={styles.sectionTitle}>Add a customer</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor='customer-name'>Customer Name</label>
          <input
            className={styles.input}
            id='customer-name'
            type='text'
            value={name}
            placeholder='Enter customer name'
            autoComplete='name'
            required
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor='customer-email'>Email</label>
          <input
            className={styles.input}
            id='customer-email'
            type='email'
            value={email}
            placeholder='Enter customer email'
            autoComplete='email'
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <button type='submit' className={styles.addButton}>
          Add customer
        </button>
      </form>
    </section>
  )
}

export default CustomerAdd

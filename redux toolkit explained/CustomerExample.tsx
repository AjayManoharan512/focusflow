import { useContext } from 'react'

import { ThemeContext } from '../src/contexts/ThemeContext'
import CustomerAdd from './CustomerAdd'
import CustomerShow from './CustomerShow'
import styles from './customerExample.module.scss'

function CustomerExample() {
  const { theme } = useContext(ThemeContext)

  return (
    <main className={`${styles.page} ${theme ? '' : styles.dark}`} aria-labelledby='customer-page-title'>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Customer management</p>
        <h2 id='customer-page-title'>Redux Toolkit Customer Example</h2>
        <p className={styles.description}>Add, review, and manage customer records.</p>
      </header>
      <CustomerAdd />
      <CustomerShow />
    </main>
  )
}

export default CustomerExample

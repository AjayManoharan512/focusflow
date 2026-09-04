import CustomerAdd from './CustomerAdd'
import CustomerShow from './CustomerShow'

function CustomerExample() {
  return (
    <div style={{ maxWidth: '720px', margin: '40px auto', padding: '24px', border: '1px solid #e5e7eb', borderRadius: '16px', background: '#fff' }}>
      <h2 style={{ marginBottom: '20px' }}>Redux Toolkit Customer Example</h2>
      <CustomerAdd />
      <CustomerShow />
    </div>
  )
}

export default CustomerExample

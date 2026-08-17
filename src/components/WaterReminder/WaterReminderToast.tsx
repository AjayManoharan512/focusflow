import { type ReactNode } from 'react'

function WaterReminderToast({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  if (!visible) {
    return null
  }

  return (
    <div
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: 9999,
        background: '#1f2937',
        color: '#fff',
        padding: '14px 16px',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
        maxWidth: '320px',
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: '6px' }}>💧 Water reminder</div>
      <div style={{ fontSize: '14px', lineHeight: 1.4 }}>
        Time to drink a glass of water and stay hydrated.
      </div>
      <button
        type="button"
        onClick={onClose}
        style={{
          marginTop: '10px',
          border: 'none',
          borderRadius: '999px',
          padding: '6px 12px',
          background: '#38bdf8',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Done
      </button>
    </div>
  )
}

export default WaterReminderToast
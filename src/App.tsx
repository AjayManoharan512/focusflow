import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './common/components/Layout'
import Usereducerexample from './usereducerexample/usereducerexample'

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

import { ThemeContext } from './themecontext'

import MoodCapturer from './miniprojects/day2'
import Tasklistnew from './miniprojects/day3'
import Focustimer from './miniprojects/day4'
import Dashboard from './miniprojects/day5'
import Quotegenerator from './miniprojects/day6'
import Weatherappcard from './miniprojects/day6/index2'

import Goalboard from './miniprojects/day7'

import Tripboard from './miniprojects/day8'
import Randomadvice from './miniprojects/day9'
import Forms from './furtherdeeper/forms'
import Newsapi from './miniprojects/day6/newsapi';
import Simpledebounce from './miniprojects/debounce/simpledebounce';
import Notesapp from './miniprojects/notesapp';
import Index from './typscript/index';


function App() {
  const [status, setstatus] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => { setstatus(!status) }, 50000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (!('Notification' in window)) {
      return
    }

    const showReminder = () => {
      if (Notification.permission === 'granted') {
        new Notification('💧 Water reminder', {
          body: 'Time to drink a glass of water and stay hydrated.',
          tag: 'water-reminder',
        })
      } else {
        setToastVisible(true)
      }
    }

    if (Notification.permission === 'default') {
      void Notification.requestPermission().catch(() => {
        setToastVisible(true)
      })
    }

    const intervalId = window.setInterval(showReminder, 15 * 60 * 1000)
    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (!toastVisible) {
      return
    }

    const timerId = window.setTimeout(() => {
      setToastVisible(false)
    }, 6000)

    return () => window.clearTimeout(timerId)
  }, [toastVisible])

  const [theme, settheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, settheme }}>
        <BrowserRouter>

          <Routes>
             {/* // claude projects */}
              
            <Route path='/' element={<Layout><Dashboard/></Layout>}></Route>
            <Route path='/moodcapturer' element={<Layout><MoodCapturer/></Layout>}></Route>
            <Route path='/tasklistnew' element={<Layout><Tasklistnew/></Layout>}></Route>
              <Route path='/focussession' element={<Layout><Focustimer/></Layout>}></Route>
               <Route path='/dashboard' element={<Layout><Dashboard/></Layout>}></Route>
                <Route path='/quotegenerator' element={<Layout><Quotegenerator/></Layout>}></Route>
                <Route path='/weatherapp' element={<Layout><Weatherappcard/></Layout>}></Route>
                <Route path='/goalform' element={<Layout><Goalboard/></Layout>}></Route>
                 <Route path='/tripform' element={<Layout><Tripboard/></Layout>}></Route>
                  <Route path='/randomadvice' element={<Layout><Randomadvice/></Layout>}></Route>
                  <Route path='/newsapi' element={<Layout><Newsapi/></Layout>}></Route>
                  <Route path='/notes' element={<Layout><Notesapp/></Layout>}></Route>




         
             <Route path='/forms' element={<Forms/>}></Route>
              <Route path='/debounce' element={<Simpledebounce onSearch={(value) => console.log('Search:', value)}/>}></Route>
            <Route path='/typescript' element={<Layout><Index/></Layout>}></Route>
            <Route path='/usereducerexample' element={<Usereducerexample></Usereducerexample>}></Route>
            <Route path='/majoroperations' element={

              <Usereducerexample />
            }></Route>





          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>

      <WaterReminderToast visible={toastVisible} onClose={() => setToastVisible(false)} />
    </>
  )
}

export default App

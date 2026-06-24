import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Taskform from './taskflow/components/taskform'
import Layout from './taskflow/components/layout'
import Tasklist from './taskflow/components/tasklist'




import Usereducerexample from './usereducerexample/usereducerexample'

import { ThemeContext } from './themecontext'

import HabitCard from './miniprojects/day1'
import MoodCapturer from './miniprojects/day2'
import Tasklistnew from './miniprojects/day3'
import Focustimer from './miniprojects/day4'
import Dashboard from './miniprojects/day5'
import Quotegenerator from './miniprojects/day6'
import Weatherappcard from './miniprojects/day6/index2'

import Goalboard from './miniprojects/day7'

import Tripboard from './miniprojects/day8/tripboard'
import Randomadvice from './miniprojects/day9/randommoviesuggetion'







function App() {

  var info = {
    name: "Ajay",
    age: 27,
    title: "Ui developer",
    bio: "im ui developer working at a worktual innovations"
  }
  const [status, setstatus] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => { setstatus(!status) }, 50000)
    return () => {
      clearTimeout(timer)
    }

  }, [])
 
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
              
            <Route path='/' element={<Layout><HabitCard  ></HabitCard></Layout>}></Route>
            <Route path='/moodcapturer' element={<Layout><MoodCapturer/></Layout>}></Route>
            <Route path='/tasklistnew' element={<Layout><Tasklistnew/></Layout>}></Route>
              <Route path='/focussession' element={<Layout><Focustimer/></Layout>}></Route>
               <Route path='/dashboard' element={<Layout><Dashboard/></Layout>}></Route>
                <Route path='/quotegenerator' element={<Layout><Quotegenerator/></Layout>}></Route>
                <Route path='/weatherapp' element={<Layout><Weatherappcard/></Layout>}></Route>
                <Route path='/goalform' element={<Layout><Goalboard/></Layout>}></Route>
                 <Route path='/tripform' element={<Layout><Tripboard/></Layout>}></Route>
                   <Route path='/randomadvice' element={<Layout><Randomadvice/></Layout>}></Route>




         
  
            <Route path='/usereducerexample' element={<Usereducerexample></Usereducerexample>}></Route>
            <Route path='/majoroperations' element={

              <Usereducerexample />
            }></Route>





          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>





    </>
  )
}

export default App

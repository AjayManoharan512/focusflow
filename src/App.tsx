import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Taskform from './taskflow/components/taskform'
import Layout from './taskflow/components/layout'
import Tasklist from './taskflow/components/tasklist'




import Addanonobjecttoarray from './majoroperations'
import Updateobject from './majoroperations'
import Usereducerexample from './usereducerexample/usereducerexample'
import Greetingcardgenerator from './Roadmap/stage1/greetingcardgenerator'
import { ThemeContext } from './themecontext'
// import Userlist from './Roadmap/stage1/userlist'
// import Tablist from './Roadmap/stage1/userlist'
// import Showhidepassword from './Roadmap/stage1/userlist'
// import Quotegenerator from './Roadmap/stage1/userlist'


import Loginneww from './customcomponents/login'
import Autosaveinput from './Roadmap/stage1/userlist'

import Timer from './Roadmap/stage1/userlist'
import Timerneww from './Roadmap/stage1/userlist'
import Showhidepassword from './Roadmap/stage1/userlist'
import Tablist from './Roadmap/stage1/userlist'
import Counter from './Roadmap/stage1/userlist'
import Movielist from './Roadmap/stage1/userlist'
import Trafficlights from './Roadmap/stage1/userlist'

import Offlinestatus from './Roadmap/stage1/offline'
import Statuswatcher from './Roadmap/stage1/statuswatcher'
import Sessiontracker from './Roadmap/stage1/sessiotracker'
import Useractivitymonitor from './Roadmap/stage1/useractivitymonitor'
import Chatpresence from './Roadmap/stage1/chatpressence'
import Usreducerexamples from './Roadmap/stage1/userefexamples'
import UseRefExample from './Roadmap/stage1/userefexamples'
import Trackprevvalue from './Roadmap/stage1/userefexamples'
import Trackrender from './Roadmap/stage1/userefexamples'
import Trackrerender from './Roadmap/stage1/userefexamples'
import Autofocusinputnew from './Roadmap/stage1/userefexamples'
import Userpresencemonitor from './userpresencemonitor'
import Debouncerenderins from './debouncedsearchrenderinspector'

import Usememoexample from './usememo'
import Todolist from './projectnew/todolist'

import HabitCard from './miniprojects/day1'
import MoodCapturer from './miniprojects/day2'
import Tasklistnew from './miniprojects/day3'
import Focustimer from './miniprojects/day4'
import Dashboard from './miniprojects/day5'
import Quotegenerator from './miniprojects/day6'
import Weatherappcard from './miniprojects/day6/index2'

import Goalboard from './miniprojects/day7'
import Goalform from './miniprojects/day7/goalform'
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




            <Route path='/todolist' element={<Layout><Todolist /></Layout>}></Route>
            <Route path='/taskform' element={<Layout><Taskform /></Layout>}></Route>
            <Route path='/tasklist' element={<Layout><Tasklist /></Layout>}></Route>
            <Route path='/debouncemonitor' element={<Layout><Debouncerenderins /></Layout>}></Route>
            <Route path='/userpresencemonitor' element={<Layout><Userpresencemonitor name="Ajay Manoharan" /></Layout>}></Route>
            <Route path='/stage3' element={<Layout>

            </Layout>}>
            </Route>
            <Route path='/stage1' element={<Layout>
              <Greetingcardgenerator user={info}>
              </Greetingcardgenerator>

            </Layout>}>
            </Route>
            <Route path='/stage2' element={<Layout>

              {/* <Formsmall /> */}

            </Layout>}></Route>

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

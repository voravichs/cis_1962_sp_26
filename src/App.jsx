import './App.css'
import Navbar from './Components/Navbar'
import WelcomeBanner from './Components/WelcomeBanner'
import ScheduleTable from './Components/ScheduleTable'
import AssignmentsCards from './Components/AssignmentsCards'
import ResourcesCards from './Components/ResourcesCards'
import Staff from './Components/Staff'

function App() {
  return (
    <div className="main-bg-light min-h-screen pt-16 pb-24 flex flex-col items-center gap-16 ah-font">
      <Navbar/>
      <WelcomeBanner/>
      <ScheduleTable/>
      <AssignmentsCards/>
      <ResourcesCards/>
      <Staff/>
    </div>
  )
}

export default App

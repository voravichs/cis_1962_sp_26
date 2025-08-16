import './App.css'
import Home from './Routes/Home';
import NotFound from './Routes/NotFound';
import Syllabus from './Routes/Syllabus';
import DataAnalysis from "./Routes/Assignments/1-DataAnalysis"
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/syllabus' element={<Syllabus/>}/>
        <Route path='/1-data-analysis' element={<DataAnalysis/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import Home from './Routes/Home';
import NotFound from './Routes/NotFound';
import Syllabus from './Routes/Syllabus';
import DataAnalysis from "./Routes/Assignments/1-DataAnalysis"
import StyleGuide from './Components/StyleGuide';
import AIPolicy from './Routes/AIPolicy';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/syllabus' element={<Syllabus/>}/>
        <Route path='/1-data-analysis' element={<DataAnalysis/>}/>
        <Route path='/style-guide' element={<StyleGuide/>}/>
        <Route path='/ai-policy' element={<AIPolicy/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

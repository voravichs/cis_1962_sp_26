import './App.css'
import Home from './Routes/Home';
import NotFound from './Routes/NotFound';
import Syllabus from './Routes/Syllabus';
import DataAnalysis from "./Routes/Assignments/1-DataAnalysis"
import ChatJS from './Routes/Assignments/2-ChatJS';
import ProjectScaffolding from './Routes/Assignments/3-ProjectScaffolding';
import StyleGuide from './Routes/StyleGuide';
import AIPolicy from './Routes/AIPolicy';
import Development from './Routes/Development';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/syllabus' element={<Syllabus/>}/>
        <Route path='/1-data-analysis' element={<DataAnalysis/>}/>
        <Route path='/2-chatjs' element={<ChatJS/>}/>
        <Route path='/3-project-scaffolding' element={<ProjectScaffolding/>}/>
        <Route path='/style-guide' element={<StyleGuide/>}/>
        <Route path='/ai-policy' element={<AIPolicy/>}/>
        <Route path='/development' element={<Development/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

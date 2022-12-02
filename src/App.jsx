import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage'
import StoriesPage from './StoriesPage'
import StorePage from './StorePage'
import AboutPage from './AboutPage'
import './App.css'

function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/historias' element={<StoriesPage/>}/>
      <Route path='/productos' element={<StorePage/>}/>
      <Route path='/acercade' element={<AboutPage/>}/>
    </Routes>
  </Router>
}

export default App

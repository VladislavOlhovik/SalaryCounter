import { Route, Routes } from 'react-router-dom'

import { useTheme } from '@theme'

import { About, Home } from './pages'
import './App.scss'

function App() {
  const { theme } = useTheme()

  return (
    <div className={`appWrapper ${theme}`}>
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

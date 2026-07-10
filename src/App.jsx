import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import AddCar from './Components/AddCar'
import SearchCar from './Components/SearchCar'
import DeleteCar from './Components/DeleteCar'
import ViewCar from './Components/ViewCar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddCar />} />
          <Route path="/search-cars" element={<SearchCar />} />
          <Route path="/delete-car" element={<DeleteCar />} />
          <Route path="/view-cars" element={<ViewCar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

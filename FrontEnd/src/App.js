import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./Screens/Home"
import Login from './Screens/Login'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}
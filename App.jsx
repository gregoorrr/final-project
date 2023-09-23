import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'
import Chessboard from './components/Chessboard'
import Profile from './components/Profile'
import Rules from './components/Rules'
import UpdatedProfile from './components/UpdatedProfile'
import Obiettivi from './components/Obiettivi'

function App() {
  
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/home/:username' element={<Home />}/>ì
        <Route path='/login' element={<Login/>}/>
        <Route path='/game' element={<Chessboard />}/>
        <Route path='/profile/:username' element={<Profile />}/>
        <Route path='/rules' element={<Rules />}/>
        <Route path='/updatedProfile/:username' element={<UpdatedProfile />}/>
        <Route path='/obiettivi' element={<Obiettivi />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App

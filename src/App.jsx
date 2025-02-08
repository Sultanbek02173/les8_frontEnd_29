import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import UserDetail from './components/UserDetail';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}/>
        <Route path='/detail/:id' element={<UserDetail />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

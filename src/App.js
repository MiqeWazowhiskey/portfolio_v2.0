import Header from './components/common/header';
import {Routes, Route} from "react-router-dom"
import { Home ,Wall, Contact, Projeler } from './Pages';
import './App.css';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Wall' element={<Wall/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Projeler' element={<Projeler/>}></Route>
      </Routes>
      <Analytics/>
    </div>
    
 
    
    
  );
}

export default App;

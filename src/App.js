import {Routes, Route} from "react-router-dom"
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
const Home = React.lazy(()=>import("./Pages/Home"))
const Contact = React.lazy(()=>import("./Pages/Contact"))
const Wall = React.lazy(()=>import("./Pages/Wall"))
const Projeler = React.lazy(()=>import("./Pages/Projeler"))

function App() {
  return (
    <div className='App'>
      <React.Suspense
          fallback={
            <div className="text-black w-full justify-center items-center text-3xl font-extrabold">
              Loading...
            </div>
        }>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Wall' element={<Wall/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Projeler' element={<Projeler/>}></Route>
      </Routes>
      <Analytics/>
      </React.Suspense>
    </div>
    
 
    
    
  );
}

export default App;

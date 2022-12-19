import {Routes, Route} from "react-router-dom"
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import React, { useTransition } from 'react';
const Home = React.lazy(()=>import("./Pages").then(module=>{
  return{default: module.Home}
}))
const Projeler = React.lazy(()=>import("./Pages").then(module=>{
  return{default: module.Projeler}
}))
const Contact = React.lazy(()=>import("./Pages").then(module=>{
  return{default: module.Contact}
}))
const Wall = React.lazy(()=>import("./Pages").then(module=>{
  return{default: module.Wall}
}))


function App() {
  const [isPending, startTransition] = useTransition();
  return (
    <div className='App'>
      <React.Suspense
          fallback={
            <div className="text-black flex h-screen justify-center items-center text-3xl font-extrabold">
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

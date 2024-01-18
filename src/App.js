import {Routes, Route} from "react-router-dom"
import './App.css';
import {Analytics} from '@vercel/analytics/react';
import {Navigate} from "react-router-dom";
import React, {useTransition} from 'react';
import {LazyExoticComponent} from "react";
import Layout from "./components/common/layout/Layout";

const HomeV2 = React.lazy(() => import("./Pages").then((module) => {
    return {default: module.HomeV2}
}))
const Projeler: LazyExoticComponent<T> = React.lazy(() => import("./Pages").then(module => {
    return {default: module.Projeler}
}))
const Contact: LazyExoticComponent<T> = React.lazy(() => import("./Pages").then(module => {
    return {default: module.Contact}
}))
const Wall: LazyExoticComponent<T> = React.lazy(() => import("./Pages").then(module => {
    return {default: module.Wall}
}))

const Bookmarks : LazyExoticComponent<T> = React.lazy(() => import("./Pages").then(module => {
    return {default: module.Bookmarks}
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
                <Layout>
                    <Routes>
                        <Route path='/' element={<HomeV2/>}></Route>
                        <Route path='/Wall' element={<Wall/>}></Route>
                        <Route path='/Contact' element={<Contact/>}></Route>
                        <Route path='/Projects' element={<Projeler/>}></Route>
                        <Route path='/Bookmarks' element={<Bookmarks/>}></Route>
                    </Routes>
                </Layout>
                <Analytics/>
            </React.Suspense>
        </div>


    );
}

export default App;

import { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import "./index.scss";

import NavBar from './components/NavBar';

const MainPage = lazy(() => import("./pages/MainPage"));
const AboutPage = lazy(() => import("./pages/About"));




export function App() {

  return (
    <div className="app">
      <NavBar/>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>)
}
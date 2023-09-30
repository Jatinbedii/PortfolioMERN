import {Routes, Route } from "react-router-dom";
import './App.css'
import Nav from './components/Nav'
import Home from "./components/Home";
import Contact from "./components/Contact";
import Chat from "./components/Chat";
import Project from "./components/Project";
import Error from "./components/Error";
import Music from "./components/Music";
function App() {
 
  

  return (<>
  <Music/>
    <Routes>
    <Route path="/" element={<Home />} index/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/project" element={<Project />} />
      <Route path="*" element={<Error />} />
    </Routes> 
    <Nav/>
    </>
  )
}

export default App

import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./About"
import  Example  from "./Example"
import NavBar from "./NavBar"
import Projects from "./Projects"

export default function AppRouter(){
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<About/>}/>
                <Route path="/events" element={<Example/>}/>
                <Route path="/reviews" element={<Projects/>}/>
            </Routes>
        </Router>
    )
}
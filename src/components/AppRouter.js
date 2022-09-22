import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./About"
import  Example  from "./Example"
import NavBar from "./NavBar"
import Projects from "./Projects"
import Mainmern from "./mern/Mainmern"

export default function AppRouter(){
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/MyFolder" exact element={<About/>}/>
                <Route path="/reviews" exact element={<Projects/>}/>
                <Route path="/crudmern" exact element={<Mainmern/>}/>
            </Routes>
        </Router>
    )
}
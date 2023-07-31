import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";



const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            >
            </Route>
            <Route
                path="/about"
                element={<About />}
            >
            </Route>
            <Route
                path="/contact"
                element={<Contact />}
            >
            </Route>
        </Routes>
    )
}

export default AppRoutes;
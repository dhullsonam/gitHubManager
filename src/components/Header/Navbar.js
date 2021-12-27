import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "../NavigationBar/Home/HomePage";
import About from "../NavigationBar/About/About";

const Navbar = () => {
    return (
        <div>
            <div style={{textAlign:"right" ,margin:'10px',}}>
                <Link to={"/"} style={{padding:'10px'}}>Home</Link>
                <Link to={"/about"}style={{padding:'10px'}}>About</Link>
            </div>

            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/about"} element={<About/>}/>
            </Routes>

        </div>
    );
};

export default Navbar;
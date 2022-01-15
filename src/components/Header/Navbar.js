import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "../NavigationBar/Home/HomePage";
import About from "../NavigationBar/About/About";
import CreateRepo from "../createRepo/createRepo";
const Navbar = () => {
    return (
        <div >
            <div style={{textAlign:"right" ,margin:'10px',}}>
                <Link to={"/"} style={{padding:'10px'}}>Home</Link>
                <Link to={"/about"} style={{padding:'10px'}}>About</Link>
                <Link to={'/create-repo'} style={{padding:'10px'}}>CreateRepo</Link>
            </div>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/create-repo"} element={<CreateRepo/>}/>
            </Routes>

        </div>
    );
};

export default Navbar;
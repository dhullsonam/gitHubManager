import React from 'react';
import HomePage from "./components/NavigationBar/Home/HomePage";
import SearchBar from "./components/SearchBar/SearchBar";
import {
    BrowserRouter,
    Routes,
    Route, Link
} from "react-router-dom";
import Navbar from "./components/Header/Navbar";

const RootComponent = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>

        </>

    );
};

export default RootComponent;
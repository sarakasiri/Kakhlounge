import React, { useState } from 'react';

import './styles/App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from '../containers/mainPage/MainPage';
import MenuPage from '../containers/menuPage/MenuPage';
import RestaurantInfo from '../containers/restaurantInfo/RestaurantInfo';

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/restaurant-info" element={<RestaurantInfo />} />
            </Routes>
        </div>
    );
}

export default App;
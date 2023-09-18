import React from 'react';

import './styles/App.css'

import { Routes, Route } from "react-router-dom";

import MainPage from '../containers/mainPage/MainPage';
import MenuPage from '../containers/menuPage/MenuPage';
import RestaurantInfo from '../containers/restaurantInfo/RestaurantInfo';
import BirthdayPage from '../containers/birthday/Birthday';

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/restaurant-info" element={<RestaurantInfo />} />
                <Route path="/birthday-items" element={<BirthdayPage />} />
            </Routes>
        </div>
    );
}

export default App;
import React, { useState } from 'react';

import './styles/App.css'

// import AppRouter from '../routes/router/AppRouter ;

import MenuPage from '../containers/menuPage/MenuPage';

const App = () => {

    return (
        <div className="App">
            <MenuPage />
            {/* <AppRouter /> */}
        </div>
    );
}

export default App;
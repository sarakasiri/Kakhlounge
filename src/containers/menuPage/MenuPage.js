import React, { useState } from 'react';

import classes from './styles/MenuPage.module.scss';

import Categories from '../../components/menu/Categories';
import Menu from '../../components/menu/Menu';
import items from '../../components/menu/data';
import Example from '../../components/slider/Slider';

import { Grid } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import logo from "../../assets/logo.png";

const allCategories = [...new Set(items.map(item => item.category_name))];

const MenuPage = () => {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(items);
    const [menuBackground, setMenuBackground] = useState(true);

    const filterItems = category => {
        // if (category == 'all') {
        //     setMenuItems(items);
        //     return;
        // }
        const newItems = items.filter((item) => item.category_name === category);
        setMenuItems(newItems);
    };

    const handleBackground = () => {
        setMenuBackground(value => !value)
    }

    return (
        <div className={classes.menuContainer}>
            <Grid container xs={12} className={classes.menuCarousel}>
                <Grid item xs={12} >
                    <Example />
                </Grid>
            </Grid>
            <Grid container xs={12} className={classes.menuBackground}>
                <Grid item xs={10} className={classes.menuItems}>
                    <div className={classes.backgroundCover}></div>
                    <Menu className={classes.menuItems} items={menuItems} />
                </Grid>
                <Grid item xs={2}>
                    <Categories categories={categories} filterItems={filterItems} handleBackground={handleBackground} />
                </Grid>

            </Grid>
        </div>
    );
}

export default MenuPage;

import React, { useState, useEffect } from 'react';

import classes from './styles/MenuPage.module.scss';

import Categories from '../../components/menu/Categories';
import Menu from '../../components/menu/Menu';

import { Grid } from '@mui/material';

import allfoods from '../../assets/allfoods.webp';

import CallApi from '../../functions/CallApi';
import { GetMenuAPI } from '../../api/menu';

const MenuPage = () => {
    const [categories, setCategories] = useState([]);
    const [menuItems, setMenuItems] = useState([]);


    useEffect(() => {
        getMenuDatas();
    }, []);

    const getMenuDatas = async () => {
        // setIsLoading(true);
        try {
            let productResponse = await CallApi(GetMenuAPI());
            let all_foods = {
                id: 0,
                name: "همه",
                icon_link: allfoods,
                category_foods: []
            }
            productResponse.unshift(all_foods);
            setCategories(productResponse);
            setMenuItems(productResponse);
        } catch (error) {
            console.log(error);
        } finally {
            // setIsLoading(false);
        };
    };

    const renderFood = category_id => {
        let result = categories;
        if (category_id !== 0) {
            result = [categories.find((item) => item.id === category_id)];
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setMenuItems(result);
    };

    return (
        <div className={classes.menuContainer}>
            {/* <Grid container xs={12} className={classes.menuCarousel}>
                <Grid item xs={12} >
                    <Example />
                </Grid>
            </Grid> */}
            <Grid container xs={12} className={classes.menuBackground}>
                <Grid item xs={9} className={classes.menuItems}>
                    <div className={classes.backgroundCover}></div>
                    <Menu className={classes.menuItems} items={menuItems} />
                </Grid>
                <Grid item xs={3}>
                    <Categories
                        categories={categories}
                        filterItems={renderFood}
                    />
                </Grid>

            </Grid>
        </div>
    );
}

export default MenuPage;

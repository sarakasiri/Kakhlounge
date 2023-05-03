import React, { useState } from 'react';

import classes from './styles/MenuPage.module.scss';

import Categories from '../../components/menu/Categories';
import Menu from '../../components/menu/Menu';
import items from '../../components/menu/data';

const allCategories = ['all', ...new Set(items.map(item => item.category))];

const MenuPage = () => {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(items);
    const [menuBackground, setMenuBackground] = useState(true);

    const filterItems = category => {
        if (category == 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    const handleBackground = () => {
        setMenuBackground(value => !value)
    }

    return (
        <div className={classes.menuPageBackground}>
            <Categories categories={categories} filterItems={filterItems} handleBackground={handleBackground} />

            {/* <div className={classes.menuBackground}> */}
            <Menu items={menuItems} />
            {/* </div> */}
        </div>
    );
}

export default MenuPage;

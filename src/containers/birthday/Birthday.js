import React, { useState, useEffect } from 'react';

import classes from './styles/Birthday.module.scss';

import { Grid } from '@mui/material';

import Carousel from 'react-material-ui-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import CallApi from '../../functions/CallApi';
import { GetBirthdayAPI } from '../../api/birthday';
import { GetInfoAPI } from '../../api/info';

const BirthdayPage = () => {
    const [menuBackgroundImage, setMenuBackgroundImage] = useState(null);
    const [birthdayData, setBirthdayData] = useState([]);

    useEffect(() => {
        getMenuBackground();
        getBirthdayData();
    }, []);

    const getMenuBackground = async () => {
        try {
            let response = await CallApi(GetInfoAPI());
            setMenuBackgroundImage(response.find(item => item.title === "MenuImage").image);
        } catch (error) {
            console.log(error);
        }
    }
    const getBirthdayData = async () =>{
        try {
            let response = await CallApi(GetBirthdayAPI());
            setBirthdayData(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={classes.menuContainer}>
            <Grid container spacing={3} className={classes.menuBackground} sx={{ backgroundImage: `url(${menuBackgroundImage})` }}>
                {birthdayData?.map((item, index)=>(
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
                        <div className={classes.menuCard}>
                            {item?.birthday_images &&
                                <Carousel>
                                    {item?.birthday_images?.map((item, i) => <LazyLoadImage key={i} src={item.image_link} className={classes.itemImage} />)}
                                </Carousel>
                            }
                            <div className={classes.menuItems}>
                                <div>
                                    <p style={{ fontSize: "1.4rem", color: "#fefefe" }}>
                                        {item.name}
                                    </p>
                                </div>
                                <div>
                                    <p style={{ fontSize: "1.4rem", color: "#fefefe" }}>
                                        {item.price !== 0 ? item.price : null}
                                    </p>
                                </div>
                            </div>
                            <div className={classes.itemsDesc}>
                                <span style={{ color: "#fefefe", fontSize: ".75rem" }}>{item.description}</span>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default BirthdayPage;

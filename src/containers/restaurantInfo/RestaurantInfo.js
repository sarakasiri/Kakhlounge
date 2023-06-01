import React from "react";

import classes from './styles/RestaurantInfo.module.scss';

import InstagramIcon from '@mui/icons-material/Instagram';

import Typography from "@mui/material/Typography";


const RestaurantInfo = () => {
    return (
        <div className={classes.infoBackground}>
            <div style={{ width: "20rem", padding: "2rem 0 1rem 0" }}>
                <Typography className={classes.restaurantInfoTitle}>ساعات کاری</Typography>
                <Typography className={classes.restaurantInfo}>هر روز هفته : 10:30 تا 24:00</Typography>
            </div>
            <div className={classes.menuItemDash}></div>
            <div style={{ width: "20rem", paddingTop: "1rem " }}>
                <Typography className={classes.restaurantInfoTitle}>آدرس رستوران</Typography>
                <Typography className={classes.restaurantInfo}>تهران ، اسلامشهر ، خیابان زرفشان ، کوچه اول ، مجموعه کاخ لانژ </Typography>
                <Typography className={classes.restaurantInfo} sx={{ paddingTop: "1rem", fontWeight: "600" }}>تلفن : <a href="tel:09121039858" style={{ textDecoration: "none", color: "black" }}>09121039858</a></Typography>
            </div>
            <div className={classes.menuItemDash}></div>
            <div style={{ width: "20rem", padding: "2rem 0 1rem 0" }}>
                <Typography className={classes.restaurantInfoTitle}>شبکه های اجتماعی</Typography>
                <Typography className={classes.restaurantInfo} sx={{ paddingTop: "0.8rem", fontWeight: "600" }}><a href="http://instagram.com/_u/kakh_lounge/" style={{ textDecoration: "none", color: "black" }}><InstagramIcon /></a></Typography>
            </div>
        </div>
    );
};

export default RestaurantInfo;
import React, { useState, useEffect } from 'react';

import classes from './styles/RestaurantInfo.module.scss';

import InstagramIcon from '@mui/icons-material/Instagram';

import Typography from "@mui/material/Typography";

import CallApi from '../../functions/CallApi';
import { GetInfoAPI } from '../../api/info';
import { Divider, Grid } from '@mui/material';

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const RestaurantInfo = () => {
    const [instagram, setInstagram] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [startTime, setStartTime] = useState('10:30');
    const [endTime, setEndTime] = useState('24:00');

    useEffect(() => {
        getResturantInfo();
    }, []);

    const getResturantInfo = async () => {
        try {
            let response = await CallApi(GetInfoAPI());
            setInstagram(response.find(item => item.title === "INSTAGRAM").value);
            setAddress(response.find(item => item.title === "ADDRESS").value);
            setPhoneNumber(response.find(item => item.title === "PHONE").value);
            let start = response.find(item => item.title === "StartTime").value;
            setStartTime(start.split(':')[0]);
            let end = response.find(item => item.title === "EndTime").value;
            setEndTime(end.split(':')[0]);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={classes.infoBackground}>
            <Grid container xs={12} className={classes.infoBox}>
                <Grid item xs={1} className={classes.infoIcons}>
                    <AccessTimeIcon/>
                </Grid>
                <Grid item xs={8}>
                <Typography className={classes.restaurantInfoTitle}>ساعات کاری</Typography>
                <Typography className={classes.restaurantInfo}>هر روز هفته : {startTime} تا {endTime}</Typography>
                </Grid>
            </Grid>
            <Divider/>
            <Grid container xs={12}  className={classes.infoBox}>
                <Grid item xs={1} className={classes.infoIcons}>
                    <LocationOnIcon/>
                </Grid>
                <Grid item xs={8}>
                <Typography className={classes.restaurantInfoTitle}>آدرس رستوران</Typography>
                <Typography className={classes.restaurantInfo}>{address}</Typography>
               </Grid>
            </Grid>
            <Divider/>
            <Grid container xs={12}  className={classes.infoBox}>
                <Grid item xs={1} className={classes.infoIcons}>
                    <PhoneInTalkIcon/>
                </Grid>
                <Grid item xs={8}>
                <Typography className={classes.restaurantInfoTitle}>تلفن</Typography>
                <Typography className={classes.restaurantInfo}>
                    <a href={`tel:${phoneNumber}`} className={classes.phoneNumber}>{phoneNumber}</a>
                    </Typography>
                </Grid>
            </Grid>
            <Divider/>
            <Grid container xs={12}  className={classes.infoBox}>
            <Grid item xs={1} className={classes.infoIcons}>
                <ShareIcon/>
            </Grid>
                <Grid item xs={8}>
                <Typography className={classes.restaurantInfoTitle}>شبکه های اجتماعی</Typography>
                <Typography className={classes.restaurantInfo} sx={{ paddingTop: "0.8rem", fontWeight: "600" }}>
                    <a href={`http://instagram.com/_u/${instagram}/`} style={{ textDecoration: "none", color: "black" }}>
                        <InstagramIcon />
                        </a>
                        </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default RestaurantInfo;
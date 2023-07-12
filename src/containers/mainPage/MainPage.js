import React from 'react';

import classes from './styles/MainPage.module.scss';

import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { Link } from 'react-router-dom';

import InstagramIcon from '@mui/icons-material/Instagram';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import logo from '../../assets/logo2.jpeg';


const MainPage = () => {
    let today = new Date();
    let currentHour = today.getHours()

    var items = [
        {
            image: require("../../assets/slider/1.jpg")
        },
        {
            image: require("../../assets/slider/2.jpg")
        },
        {
            image: require("../../assets/slider/3.jpg")
        },
        {
            image: require("../../assets/slider/4.jpg")
        },
        {
            image: require("../../assets/slider/5.jpg")
        },
        {
            image: require("../../assets/slider/6.jpg")
        },
        {
            image: require("../../assets/slider/7.jpg")
        },
        {
            image: require("../../assets/slider/8.jpg")
        },
        {
            image: require("../../assets/slider/9.jpg")
        },
        {
            image: require("../../assets/slider/10.jpg")
        },
        {
            image: require("../../assets/slider/11.jpg")
        },
        {
            image: require("../../assets/slider/12.jpg")
        },
        {
            image: require("../../assets/slider/13.jpg")
        },
        {
            image: require("../../assets/slider/14.jpg")
        },
        {
            image: require("../../assets/slider/15.jpg")
        },
        {
            image: require("../../assets/slider/16.jpg")
        },
    ];

    return (
        <div className={classes.container}>
            <div className={classes.mainPageNav}>

                <div className={classes.logo}>
                    <LazyLoadImage style={{ width: "3.5rem", borderRadius: "2rem" }} src={logo} />
                </div>
            </div>

            <div className={classes.mainDivShadowContainer}>
                <div className={classes.mainDiv}>

                    <div>
                        <Link to="/restaurant-info">
                            <Button variant='outlined' className={classes.menuButton}>اطلاعات رستوران</Button>
                        </Link>
                        <Link to="/menu">
                            <Button variant='outlined' className={classes.menuButton}>منوی رستوران</Button>
                        </Link>
                    </div>

                    <div >
                        {
                            currentHour > 10 & currentHour < 24 ?
                                (
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <Typography sx={{ color: "#47a861" }} className={classes.mainPagetext}>
                                            درب های رستوران به روی شما باز است
                                        </Typography>
                                        <FiberManualRecordIcon
                                            sx={{
                                                color: "#47a861",
                                                marginTop: "2.15rem !important",
                                                fontSize: "0.8rem",
                                                paddingLeft: "0.3rem"
                                            }} />
                                    </div >
                                ) : (
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <Typography sx={{ color: "#ff0335" }} className={classes.mainPagetext}>
                                            تیم کاخ لانژ در حال استراحت میباشد
                                        </Typography>
                                        <FiberManualRecordIcon
                                            sx={{
                                                color: "#ff0335",
                                                marginTop: "2.15rem !important",
                                                fontSize: "0.8rem",
                                                paddingLeft: "0.3rem"
                                            }} />
                                    </div >
                                )
                        }
                        <a href="http://instagram.com/_u/kakh_lounge/" style={{ textDecoration: "none", color: "white", display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
                            <Button variant='outlined' className={classes.menuButton}>اینستاگرام ما <InstagramIcon /> </Button>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <Carousel
                    navButtonsAlwaysInvisible
                    autoPlay
                    duration={1000}
                    interval={3500}
                    sx={{
                        " & .MuiButtonBase-root": {
                            display: "none"
                        }
                    }}
                >
                    {
                        items.map((item, i) => (
                            <Box className={classes.slider} key={i} style={{ height: "100vh" }}>
                                <LazyLoadImage style={{ width: "100%", height: "100%", objectFit: "cover" }} src={item.image} />
                            </Box>
                        ))
                    }
                </Carousel >
            </div>
        </div>
    );
};

export default MainPage;
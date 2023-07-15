import React, { useState, useEffect } from 'react';

import classes from './styles/MainPage.module.scss';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import InstagramIcon from '@mui/icons-material/Instagram';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-material-ui-carousel';

import CallApi from '../../functions/CallApi';
import { GetMainPageImagesAPI } from '../../api/slider';
import { GetInfoAPI } from '../../api/info';

import logo from '../../assets/logo2.jpeg';


const MainPage = () => {
    let today = new Date();
    let currentHour = today.getHours()

    const [sliderImages, setSliderImages] = useState([]);
    const [instagram, setInstagram] = useState('');
    const [startTime, setStartTime] = useState(10);
    const [endTime, setEndTime] = useState(24);

    useEffect(() => {
        getSliderImages();
        getResturantInfo();
    }, []);

    const getSliderImages = async () => {
        try {
            let response = await CallApi(GetMainPageImagesAPI());
            setSliderImages(response);
        } catch (error) {
            console.log(error);
        }
    };
    const getResturantInfo = async () => {
        try {
            let response = await CallApi(GetInfoAPI());
            setInstagram(response.find(item => item.title === "INSTAGRAM").value);
            let start = response.find(item => item.title === "StartTime").value;
            setStartTime(Number(start.split(':')[0]));
            let end = response.find(item => item.title === "EndTime").value;
            setEndTime(Number(end.split(':')[0]));
        } catch (error) {
            console.log(error);
        }
    }

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
                            currentHour > startTime & currentHour < endTime ?
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
                        <a href={`http://instagram.com/_u/${instagram}/`} style={{ textDecoration: "none", color: "white", display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
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
                        sliderImages.map((item, i) => (
                            <Box className={classes.slider} key={i} style={{ height: "100vh" }}>
                                <LazyLoadImage style={{ width: "100%", height: "100%", objectFit: "cover" }} src={item.image_url} />
                            </Box>
                        ))
                    }
                </Carousel >
            </div>
        </div>
    );
};

export default MainPage;
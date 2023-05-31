import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import firstSlide from '../../assets/firstSlide.png';
import secondSlide from '../../assets/secondSlide.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Example(props) {

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
        <Carousel navButtonsAlwaysInvisible autoPlay >
            {
                items.map((item, i) => (
                    <Paper key={i} style={{ height: "10.6rem" }}>
                        <LazyLoadImage style={{ width: "100%" }} src={item.image} />
                    </Paper>
                ))
            }
        </Carousel >
    );
};

function Item(props) {
    return (
        <Paper style={{ height: "10rem" }}>
            <LazyLoadImage style={{ width: "100%" }} src={secondSlide} />
        </Paper>
    );
};

export default Example;
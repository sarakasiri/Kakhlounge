import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import firstSlide from '../../assets/firstSlide.png';
import secondSlide from '../../assets/secondSlide.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Example(props) {

    var items = [
        {
            image: require("../../assets/firstSlide.png")
        },
        {
            image: require("../../assets/secondSlide.jpg")
        },
    ];

    return (
        <Carousel navButtonsAlwaysInvisible autoPlay >
            {
                items.map((item, i) => <Item key={i} item={item} />)
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
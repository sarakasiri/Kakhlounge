// import React, { useState, useRef, useEffect } from 'react';

// import classes from './styles/Slider.module.scss';
// import SliderItems from './SliderItems';

// import { IconButton } from '@mui/material';
// import Button from '@mui/material/Button';

// import { FiberManualRecordRounded } from '@material-ui/icons';



// const Slider = () => {
//     const [activeIndex, setActiveIndex] = useState(0);


//     const items = [
//         {
//             title: "welcome to IUST ",
//             forSub: "For submission you must undergo the following steps",
//             description: "Signup"
//         },
//         {
//             title: "welcome to IUST ",
//             forSub: "For submission you must undergo the following steps",
//             description: "fill in the forms and upload your documents"
//         },
//         {
//             title: "welcome to IUST ",
//             forSub: "For submission you must undergo the following steps",
//             description: "Wait for the answers to come"
//         },
//     ]

//     const updateIndex = (newIndex) => {
//         if (newIndex < 0) {
//             newIndex = 0
//         } else if (newIndex >= items.length) {
//             newIndex = items.length - 1
//         }
//         setActiveIndex(newIndex)
//     }

//     return (
//         <div className={classes.container}>

//             <div className={classes.slideShow}>
//                 <div
//                     className={classes.inner}
//                     style={{ transform: `translate:(-${activeIndex * 100}%)` }}
//                 >
//                     <SliderItems item={items[activeIndex]} />
//                 </div>
//             </div>
//             <div className={classes.slideShowBtn}>
//                 {items.map((item, index) => {
//                     return (
//                         <IconButton onClick={() => { updateIndex(index) }} className={classes.indicatorButtons}>
//                             <FiberManualRecordRounded className={classes.button} fontSize='small' />
//                         </IconButton>
//                     )
//                 })}
//             </div>


//         </div >
//     );
// };

// export default Slider;

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Example(props) {
    var items = [
        {
            name: "slide number 1",
        },
        {
            name: "slide number 2 ",
        },
    ]

    return (
        <Carousel navButtonsAlwaysInvisible autoPlay >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel >
    )
}

function Item(props) {
    return (
        <Paper style={{ height: "9rem", paddingLeft: "7rem" }}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    )
}

export default Example;
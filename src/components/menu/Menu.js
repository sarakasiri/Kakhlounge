import React from "react";

import classes from "./styles/Menu.module.scss";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import divider from "../../assets/divider.png";

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { add, remove } from "../../redux/slices/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button } from "@mui/material";


const Menu = ({ items }) => {
    // const { cart } = useSelector((state) => state);
    // const dispatch = useDispatch();
    // const { enqueueSnackbar } = useSnackbar();

    // const addToCart = () => {
    //     dispatch(add(items));
    //     // enqueueSnackbar(`Item added to your cart`, {
    //     //     variant: "success",
    //     //     autoHideDuration: 2000,
    //     // });
    // };

    // const removeFromCart = () => {
    //     dispatch(remove(items.id));
    //     // enqueueSnackbar(`Item removed from your cart!`, {
    //     //     variant: "warning",
    //     //     autoHideDuration: 2000,
    //     // });
    // };

    return (
        <Container>
            <div className={classes.background}>
                {items?.map((menuItems) => {
                    return (
                        <div className={classes.menuItemsContainer}>
                            <Grid className={classes.menuGrid}>
                                <div className={classes.menuItems}>
                                    <div>
                                        <p style={{ fontSize: "1.3rem !important", color: "#d4c9ab" }}>
                                            {menuItems.title}
                                        </p>
                                    </div>
                                    {/* <div>
                                        <p style={{ color: "white" }}>
                                            {menuItems.price}
                                        </p>
                                    </div> */}
                                </div>

                                <div className={classes.menuItems}>
                                    {/* <div>

                                       {cart.some((p) => p.id === items.id) ? (
                                        <Button

                                        // onClick={removeFromCart}
                                        >
                                            < RemoveCircleOutlineIcon className={classes.removeButton} />
                                        </Button>
                                         ) : ( 
                                        <Button
                                        // onClick={addToCart}
                                        >
                                            <ControlPointIcon className={classes.addButton} />
                                        </Button>
                                         )} 
                                    </div> */}
                                    <div className={classes.itemsDesc}>
                                        <span style={{ color: "#d4cbb4" }}>{menuItems.material}</span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {/* <LazyLoadImage src={divider} style={{ width: '100%', paddingTop: '1rem' }} /> */}
                                    <div className={classes.menuItemDash}></div>
                                </div>
                            </Grid>
                        </div>
                    )
                })}
            </div >
        </Container >
    );
};

export default Menu;
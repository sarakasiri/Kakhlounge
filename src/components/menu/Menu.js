import React from "react";

import classes from "./styles/Menu.module.scss";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { LazyLoadImage } from 'react-lazy-load-image-component';

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
        <Container sx={{ paddingLeft: '0px', paddingRight: '0px' }}>
            {items?.map((category) => (
                <>
                    {category.id !== 0 ?
                        <div className={classes.background}>
                            <p style={{
                                fontSize: "2.3rem",
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'center',
                                color: "#d4c9ab"
                            }}>
                                {category.name}
                            </p>
                            <div className={classes.astrodivider}>
                                <div className={classes.astrodividermask}></div>
                                <span>
                                    <i>
                                    <LazyLoadImage src={category.icon_link} style={{ width: "3.5rem" }} />
                                    </i>
                                </span>
                            </div>
                            {category?.category_foods?.map((menuItems) => {
                                return (
                                    <div className={classes.menuItemsContainer}>
                                        <Grid className={classes.menuGrid}>
                                            <div className={classes.menuCard}>
                                                <LazyLoadImage src={menuItems.image_link} className={classes.foodImage} />
                                                <div className={classes.menuItems}>
                                                    <div>
                                                        <p style={{ fontSize: "1.4rem", color: "#d4c9ab" }}>
                                                            {menuItems.name}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p style={{ fontSize: "1.4rem", color: "#d4c9ab" }}>
                                                            {menuItems.price !== 0 ? menuItems.price : null}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={classes.itemsDesc}>
                                                    <span style={{ color: "#d4cbb4", fontSize: ".75rem" }}>{menuItems.material}</span>
                                                </div>
                                            </div>

                                            {/* <div className={classes.menuItems}>
                            <div>

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
                            </div>
                        </div> */}
                                            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}> */}
                                            {/* <LazyLoadImage src={divider} style={{ width: '100%', paddingTop: '1rem' }} /> */}
                                            {/* <div className={classes.menuItemDash}></div> */}
                                            {/* </div> */}
                                        </Grid>
                                    </div>
                                )
                            })}
                        </div >
                        :
                        null
                    }
                </>
            )
            )}
        </Container >
    );
};

export default Menu;
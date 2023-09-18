import React from "react";

import classes from "./styles/Menu.module.scss";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import noimage from "../../assets/noimagefood.png";

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

    const checkFormat = (fileLink) => {
        if (fileLink === null) {
            return "image"
        } else {
            let format = fileLink.split(".");
            format = format[format.length - 1];
            if (["jpg", "gif", "png", "jpeg", "bmp"].includes(format)) {
                return "image";
            } else {
                return "video";
            }
        }
    }

    return (
        <Container sx={{ paddingLeft: '0px', paddingRight: '0px' }}>
            {items?.map((category) => (
                <>
                    {category.id !== 0 ?
                        <div className={classes.background}>
                            <p style={{
                                fontSize: "1.8rem",
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'center',
                                color: "#fefefe"
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
                            <div className={classes.mainDivShadowContainer}>
                                <div className={classes.maintRomaDiv}>
                                    <div className={classes.typingDiv}>
                                        <Typography sx={{ color: "#fafafa" }} className={classes.romatext}>
                                            کافه روما، تجربه یک رویا
                                        </Typography>
                                    </div>
                                </div>
                                {category.description ? 
                                    <div className={classes.categoryDescriptionDiv}>
                                        <Typography sx={{ color: "#fafafa" }} className={classes.categoryDescriptionText}>
                                            {category.description}
                                        </Typography>
                                    </div>
                                : null}
                            </div>
                            {category?.category_foods?.map((menuItems) => {
                                return (
                                    <div className={classes.menuItemsContainer}>
                                        <Grid className={classes.menuGrid}>
                                            <div className={classes.menuCard}>
                                                {checkFormat(menuItems.image_link) === "image" ? (
                                                    <LazyLoadImage src={menuItems.image_link === null ? noimage : menuItems.image_link} className={classes.foodImage} />
                                                ) : (
                                                    <video className={classes.foodImage} loop autoPlay muted>
                                                        <source src={menuItems.image_link} type="video/mp4" />
                                                    </video>
                                                )}

                                                <div className={classes.menuItems}>
                                                    <div>
                                                        <p style={{ fontSize: "1.4rem", color: "#fefefe" }}>
                                                            {menuItems.name}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p style={{ fontSize: "1.4rem", color: "#fefefe" }}>
                                                            {menuItems.price !== 0 ? menuItems.price : null}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={classes.itemsDesc}>
                                                    <span style={{ color: "#fefefe", fontSize: ".75rem" }}>{menuItems.material}</span>
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
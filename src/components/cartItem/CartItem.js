import React from "react";
import { Delete } from "@mui/icons-material";
import Grid from "@mui/material/Grid";

import { remove } from "../../redux/slices/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

const CartItem = ({ items }) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const removeItemFromCart = () => {
        dispatch(remove(items.id));
        enqueueSnackbar(`Item removed from your cart!`, {
            variant: "warning",
            autoHideDuration: 2000,
        });
    };

    return (
        <>
            <div className={classes.menuItemsContainer}>
                <Grid className={classes.menuGrid}>
                    <div className={classes.menuItems}>
                        <div>
                            <p>
                                {items.price}
                            </p>
                        </div>
                        <div>
                            <p>
                                {items.title}
                            </p>
                        </div>
                    </div>
                    <div className={classes.itemsDesc}>
                        <span>{items.desc}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                        <div className={classes.menuItemDash}></div>
                    </div>
                </Grid>
            </div>
        </>
    );
};

export default CartItem;
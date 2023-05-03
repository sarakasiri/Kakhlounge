import React from "react";

import classes from "./styles/Menu.module.scss";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


const Menu = ({ items }) => {
    return (
        <div className={classes.background}>
            {items?.map((menuItem) => {
                return (
                    <div>
                        <Container>
                            <Grid className={classes.menuGrid}>
                                <div className={classes.menuItems}>
                                    <div>
                                        <p>
                                            {menuItem.price}
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            {menuItem.title}
                                        </p>
                                    </div>
                                </div>
                                <div className={classes.itemsDesc}>
                                    <span>{menuItem.desc}</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                                    <div className={classes.menuItemDash}></div>
                                </div>
                            </Grid>
                        </Container>
                    </div>
                )
            })}
        </div>
    );
};

export default Menu;
import React, { useState } from 'react';

import classes from "./styles/Categories.module.scss";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import LunchDiningIcon from '@mui/icons-material/LunchDining';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


const Categories = ({ categories, filterItems, handleBackground }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard");
    const [currentCategory, setCurrentCategory] = useState(0);

    const handleCategoryClick = (categoryIndex, category) => {
        filterItems(category);
        setCurrentCategory(categoryIndex);
        setIsCollapsed(true)
    };

    return (
        <Grid className={classes.category} >
            <div style={{ direction: "rtl" }}>
                < Box
                    sx={{
                        "& .pro-sidebar-inner": {
                            background: "black !important",
                            borderRadius: "2.5rem 0 0 2.5rem",
                        },
                        "& .pro-icon-wrapper": {
                            backgroundColor: "transparent !important",
                        },
                        "& .pro-inner-item": {
                            paddingTop: "10px !important",
                            paddingRight: "10px !important",
                            paddingLeft: "10px !important"
                        },
                        "& .pro-inner-item:hover": {
                            color: "#868dfb !important",
                        },
                        "& .pro-menu-item.active": {
                            color: "#6870fa !important",
                        },
                    }}
                >
                    <ProSidebar
                        className={classes.proSidebar}
                        collapsed={isCollapsed}
                        rtl={true}
                        width={"10rem"}
                        collapsedWidth={"3.5rem"}
                    >
                        <Menu iconShape="square" className={classes.sidebar}>
                            <MenuItem
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                icon={<MenuOutlinedIcon />}

                            />
                            {categories?.map((category, index) => {
                                return (
                                    <>

                                        <Box >
                                            <MenuItem
                                                // active={selected === title}
                                                icon={<LunchDiningIcon />}
                                                onClick={() => handleCategoryClick(index, category)}
                                            >
                                                <Typography>{category}</Typography>
                                            </MenuItem>
                                        </Box>

                                    </>
                                )
                            })}

                        </Menu>
                    </ProSidebar>
                </Box >
            </div>
        </Grid >
    );
};

export default Categories;
import React, { useState } from 'react';

import classes from "./styles/Categories.module.scss";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { ProSidebar, Menu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { LazyLoadImage } from 'react-lazy-load-image-component';

const Categories = ({ categories, filterItems }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [currentCategory, setCurrentCategory] = useState(0);

    const handleCategoryClick = (categoryIndex, category_id) => {
        filterItems(category_id);
        setCurrentCategory(categoryIndex);
        setIsCollapsed(true)
    };

    return (
        <Grid className={classes.category} >
            <div style={{ direction: "rtl" }}>
                <Box
                    sx={{
                        "& .pro-sidebar-inner": {
                            background: "#1B12121B1212 !important",
                            borderRadius: "1rem 0 0 1rem",
                        },
                        "& .pro-icon-wrapper": {
                            backgroundColor: "transparent !important",
                        },
                        "& .pro-inner-item": {
                            paddingTop: "10px !important",
                            paddingRight: "10px !important",
                            paddingLeft: "13px !important"
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
                        collapsedWidth={"5.5rem"}
                    >
                        <Menu iconShape="square" className={classes.sidebar}>
                            {categories?.map((data, index) => {
                                return (
                                    <>
                                        <Box
                                            className={`${classes.categoryBox} ${currentCategory === index ? classes.currencyCategorySelected : null}`}
                                            onClick={() => handleCategoryClick(index, data.id)}
                                        >
                                            <LazyLoadImage src={data.icon_link} style={{ width: "3.5rem" }} />
                                            <Typography className={classes.categoriesName}>{data.name}</Typography>
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

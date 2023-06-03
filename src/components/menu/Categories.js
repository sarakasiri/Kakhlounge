import React, { useState } from 'react';

import classes from "./styles/Categories.module.scss";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import LunchDiningIcon from '@mui/icons-material/LunchDining';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import salad from "../../assets/salad.png";
import pizza from "../../assets/pizza.png";
import kebab from "../../assets/kebab.png";
import steak from "../../assets/steak.png";
import sushi from "../../assets/sushi.png";
import melal from "../../assets/melal.png";
import pasta from "../../assets/pasta.png";
import stew from "../../assets/stew.png";
import rice from "../../assets/rice.png";
import burger from "../../assets/burger.png";
import hot_drink from "../../assets/hot_drink.png";
import cold_drink from "../../assets/cold_drink.png";
import shake from "../../assets/shake.png";
import punch from "../../assets/punch.png";
import smoothiea from "../../assets/smoothiea.png";
import cake from "../../assets/cake.png";
import cafee from "../../assets/cafee.png";
import coaktil from "../../assets/coaktil.png";
import nokah from "../../assets/hokah.png";
import fruit from "../../assets/fruit-juices.png";

import { LazyLoadImage } from 'react-lazy-load-image-component';

const Categories = ({ categories, filterItems, handleBackground }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard");
    const [currentCategory, setCurrentCategory] = useState(0);

    const handleCategoryClick = (categoryIndex, category_name) => {
        filterItems(category_name);
        setCurrentCategory(categoryIndex);
        setIsCollapsed(true)
    };

    return (
        <Grid className={classes.category} >
            <div style={{ direction: "rtl" }}>
                < Box
                    sx={{
                        "& .pro-sidebar-inner": {
                            background: "#23291b !important",
                            borderRadius: "2.5rem 0 0 2.5rem",
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
                        width={"12rem"}
                        collapsedWidth={"3.8rem"}
                    >
                        <Menu iconShape="square" className={classes.sidebar}>
                            <MenuItem
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                icon={<MenuOutlinedIcon />}

                            />
                            {categories?.map((category_name, index) => {
                                return (
                                    <>
                                        <Box >
                                            <MenuItem
                                                icon={
                                                    category_name == "پیتزا" ? (
                                                        <LazyLoadImage src={pizza} style={{ width: "2rem" }} />
                                                    ) : category_name == "سالاد و پیش غذا" ? (
                                                        <LazyLoadImage src={salad} style={{ width: "2rem" }} />
                                                    ) : category_name == "برگر" ? (
                                                        <LazyLoadImage src={burger} style={{ width: "2rem" }} />
                                                    ) : category_name == "استیک" ? (
                                                        <LazyLoadImage src={steak} style={{ width: "2rem" }} />
                                                    ) : category_name == "کباب" ? (
                                                        <LazyLoadImage src={kebab} style={{ width: "2rem" }} />
                                                    ) : category_name == "سوشی" ? (
                                                        <LazyLoadImage src={melal} style={{ width: "2rem" }} />
                                                    ) : category_name == "ملل" ? (
                                                        <LazyLoadImage src={sushi} style={{ width: "2rem" }} />
                                                    ) : category_name == "پاستا" ? (
                                                        <LazyLoadImage src={pasta} style={{ width: "2rem" }} />
                                                    ) : category_name == "خورش و خوراک" ? (
                                                        <LazyLoadImage src={stew} style={{ width: "2rem" }} />
                                                    ) : category_name == "پلوها" ? (
                                                        <LazyLoadImage src={rice} style={{ width: "2rem" }} />
                                                    ) : category_name == "نوشیدنی گرم" ? (
                                                        <LazyLoadImage src={hot_drink} style={{ width: "2rem" }} />
                                                    ) : category_name == "نوشیدنی سرد" ? (
                                                        <LazyLoadImage src={cold_drink} style={{ width: "2rem" }} />
                                                    ) : category_name == "شیک" ? (
                                                        <LazyLoadImage src={shake} style={{ width: "2rem" }} />
                                                    ) : category_name == "پانچ" ? (
                                                        <LazyLoadImage src={punch} style={{ width: "2rem" }} />
                                                    ) : category_name == "اسموتی" ? (
                                                        <LazyLoadImage src={smoothiea} style={{ width: "2rem" }} />
                                                    ) : category_name == "قلیان" ? (
                                                        <LazyLoadImage src={nokah} style={{ width: "2rem" }} />
                                                    ) : category_name == "آبمیوه" ? (
                                                        <LazyLoadImage src={fruit} style={{ width: "2rem" }} />
                                                    ) : category_name == "کیک و دسر" ? (
                                                        <LazyLoadImage src={cake} style={{ width: "2rem" }} />
                                                    ) : category_name == "نوشیدنی گرم اسپرسو" ? (
                                                        <LazyLoadImage src={cafee} style={{ width: "2rem" }} />
                                                    ) : category_name == "ماکتیل" ? (
                                                        <LazyLoadImage src={coaktil} style={{ width: "2rem" }} />
                                                    ) : null}
                                                onClick={() => handleCategoryClick(index, category_name)}
                                            >
                                                <Typography className={classes.categoriesName}>{category_name}</Typography>
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

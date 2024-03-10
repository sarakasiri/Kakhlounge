import React from "react";

import classes from "./styles/Loader.module.scss";

import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <MutatingDots
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#52796f"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

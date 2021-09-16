import React from "react";
import Bannerstyle from "../Styling/BannerStyle.js";

function Bannercomp(props) {
  const { teamName } = props;
  const style = Bannerstyle();
  return (
    <div className={style[`${teamName}-banner`]}>
      <div className={style[`${teamName}-overlay`]}>
        <div className={style[`${teamName}-overlay-img`]}>
        </div>
      </div>
    </div>
  );
}

export default Bannercomp;
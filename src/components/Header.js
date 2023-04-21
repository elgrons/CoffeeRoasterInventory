import React from "react";
import wallpaper from "./img/wallpaper.jpeg";

function Header() {
  return (
    <React.Fragment>
      <h1>Coffee Roastery Wholesale Inventory Tracker</h1>
      <img src={wallpaper} alt="Geo design for background" />
    </React.Fragment>
  );
}

export default Header;
import React from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import MuseumOutlinedIcon from "@mui/icons-material/MuseumOutlined";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-12 bg-slate-600">
      <div className="header_logo"></div>
      <MuseumOutlinedIcon />
      <div className="header_serch"></div>
      <input
        className=" rounded-2xl border-black w-14 h-6"
        placeholder="Search"
        type="text"
      />
      <div className="header_nav  flex flex-col">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sing In</span>
        </div>

        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>

        <div className="nav_item">
          <ShoppingBasketOutlinedIcon />
          <span className="nav_itemLineTwo">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

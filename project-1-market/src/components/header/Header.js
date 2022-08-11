import React from "react";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const Header = () => {
  return (
    <div>
      <div className="header_logo"></div>

      <div className="header_serch"></div>

      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sing In</span>
        </div>
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <ShoppingBasketOutlinedIcon/>
          <span className="nav_itemLineTwo">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

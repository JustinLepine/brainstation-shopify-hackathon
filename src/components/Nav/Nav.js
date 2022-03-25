import React from "react";
import "./Nav.scss";
import Logo from "../../assets/images/shopify_logo_black.png";
import ArrowIcon from "../../assets/icons/chevron-down_minor.png";

function Nav() {
  return (
    <section className="nav">
      <div className="nav__left">
        <img className="nav__logo" src={Logo} alt="logo" />
        <div className="nav__links">
          <h4>Start</h4>
          <img className="nav__icon" src={ArrowIcon} alt="icon" />
        </div>
        <div className="nav__links">
          <h4>Sell</h4>
          <img className="nav__icon" src={ArrowIcon} alt="icon" />
        </div>
        <div className="nav__links">
          <h4>Market</h4>
          <img className="nav__icon" src={ArrowIcon} alt="icon" />
        </div>
        <div className="nav__links">
          <h4>Manage</h4>
          <img className="nav__icon" src={ArrowIcon} alt="icon" />
        </div>
        <div className="nav__links">
          <h4>Plaza</h4>
          <img className="nav__icon" src={ArrowIcon} alt="icon" />
        </div>
      </div>

      <div className="nav__right">
        <div className="nav__links">
          <h4>Pricing</h4>
        </div>
        <div className="nav__links">
          <h4>Learn</h4>
          <img className="nav__icon" src={ArrowIcon} alt="icon" />
        </div>
        <div className="nav__links">
          <h4>Log in</h4>
        </div>
        <button className="nav__button">Start free trial</button>
      </div>
    </section>
  );
}

export default Nav;
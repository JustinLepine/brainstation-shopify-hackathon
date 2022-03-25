import React from "react";
import "./Home.scss";
import HeroLogo from "../../assets/images/shopify-world.png";
import SearchIcon from "../../assets/icons/search_minor.png";
import FilterDropdown from "../../assets/images/filter-control.png";
import LocIcon from "../../assets/icons/location_major.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home">
        <div>
          <img className="home__img" src={HeroLogo} alt="hero img" />
        </div>
        <div className="home__right">
          <h1 className="home__hero-title">Shop the world.</h1>
          <p>
            Welcome to Plaza. A new way to shop for anything from camping gear
            to cat clothes at businesses you'll love.
          </p>
          <div className="home__search-section">
            <Link className="home__search-link" to="/search">
              <div className="home__hero-search">
                <img
                  className="home__search-icon"
                  src={SearchIcon}
                  alt="icon"
                />
                <input
                  className="home__search-input"
                  placeholder="Search for anthing"
                ></input>
              </div>
            </Link>
            <button className="home__search-button">Search</button>
          </div>
          <div className="home__filters">
            <img
              className="home__filter-icon"
              src={FilterDropdown}
              alt="filter dropdown"
            />
          </div>
        </div>
      </section>
      <div className="home__barry">
        <div className="home__barry-store">
          <h2 className="home__barry-store-title">Barry's Bucket Hats</h2>
          <img className="home__barry-icon" alt="icon" src={LocIcon} />
          <p className="home__barry-location">Sofia, Bulgaria</p>
          <button className="home__barry-button">Visit Store</button>
        </div>
      </div>
      <div className="home__julia">
        <div className="home__julia-store">
          <h2 className="home__barry-store-title">Julia Jewelery</h2>
          <img className="home__barry-icon" alt="icon" src={LocIcon} />
          <p className="home__barry-location">Sao Paulo, Brazil</p>
          <button className="home__barry-button">Visit Store</button>
        </div>
      </div>
      <div className="home__kevin">
        <div className="home__kevin-store">
          <h2 className="home__barry-store-title">Kevin's Kicks</h2>
          <img className="home__barry-icon" alt="icon" src={LocIcon} />
          <p className="home__barry-location">Kentucky, USA</p>
          <button className="home__barry-button">Visit Store</button>
        </div>
      </div>
      <div className="home__aria">
        <div className="home__aria-store">
          <h2 className="home__barry-store-title">Aria's Apparel</h2>
          <img className="home__barry-icon" alt="icon" src={LocIcon} />
          <p className="home__barry-location">Tokyo, Japan</p>
          <button className="home__barry-button">Visit Store</button>
        </div>
      </div>
      <div className="home__sally">
        <div className="home__sally-store">
          <h2 className="home__barry-store-title">Sally's Store</h2>
          <img className="home__barry-icon" alt="icon" src={LocIcon} />
          <p className="home__barry-location">Brussels, Belgium</p>
          <button className="home__barry-button">Visit Store</button>
        </div>
      </div>
    </>
  );
}

export default Home;

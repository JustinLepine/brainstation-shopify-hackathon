import "./AfterSearchBar.scss";
import downArrow from "../../assets/icons/filled-down-arrow.png";
import search from "../../assets/icons/search.png";
import star from "../../assets/icons/star.png";
import x from "../../assets/icons/x.png";

function AfterSearchBar() {
  return (
    <div className="searchbar">
      <div className="searchbar__top">
        <div className="searchbar__search">
          <img className="searchbar__search-icon" src={search} alt="search" />
          <input className="searchbar__input" placeholder="Search" />
        </div>
        <div className="searchbar__product-list">
          <div className="searchbar__list-item searchbar__fashion-box">
            <p className="searchbar__fashion-text">Fashion</p>
            <img className="searchbar__down-arrow" src={downArrow} />
          </div>
          <div className="searchbar__list-item">
            <p className="searchbar__home-text">Home</p>
            <img className="searchbar__down-arrow" src={downArrow} />
          </div>
          <div className="searchbar__list-item">
            <p className="searchbar__books">Books</p>
            <img className="searchbar__down-arrow" src={downArrow} />
          </div>
          <div className="searchbar__list-item searchbar__filters-box">
            <p className="searchbar__filters">More filters</p>
          </div>
          <div className="searchbar__list-item searchbar__saved-box">
            <img className="searchbar__star" src={star} />
            <p className="searchbar__saved-text">Saved</p>
          </div>
        </div>
        <div className="searchbar__see-list">
          <div className="searchbar__list-item searchbar__all searchbar__center">
            See All
          </div>
          <div className="searchbar__list-item searchbar__center">
            See Stores
          </div>
          <div className="searchbar__list-item searchbar__products searchbar__center">
            See Products
          </div>
        </div>
      </div>
      <div className="searchbar__bottom">
        <div className="searchbar__selected">
          <p className="searchbar__bottom-text">Handmade</p>
          <img className="searchbar__x-icon" src={x} />
        </div>
        <div className="searchbar__selected">
          <p className="searchbar__bottom-text searchbar__jewelry">Jewelry</p>
          <img className="searchbar__x-icon searchbar__x-icon2" src={x} />
        </div>
      </div>
    </div>
  );
}

export default AfterSearchBar;

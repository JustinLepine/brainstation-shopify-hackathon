import "./AfterSearchHero.scss";
import afterHeroImage from "../../assets/images/aftersearchhero.png";
import locationicon from "../../assets/icons/location.png";

function AfterSearchHero() {
  return (
    <div className="searchHero">
      <div>
        <img className="searchHero__hero" src={afterHeroImage} />
      </div>
      <div className="searchHero__container">
        <h1 className="searchHero__header searchHero__header-top">Julia</h1>
        <h1 className="searchHero__header">Jewelry</h1>
        <div className="searchHero__location-box">
          <img className="searchHero__location-icon" src={locationicon} />
          <p className="searchHero__location-text"> Sāo Paulo, Brazil</p>
        </div>
        <p className="searchHero__hello">
          Hello from São Paulo! I specialize in timeless jewelry pieces made
          here in Brazil that look and wear like solid gold. These pieces will
          last you forever and you'll never have to take them off.
        </p>
        <button className="searchHero__button">Visit Store</button>
      </div>
    </div>
  );
}

export default AfterSearchHero;

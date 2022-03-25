import "./ProductCard.scss";
import ringPhoto from "../../assets/images/rings.png";

function ProductCard() {
  return (
    <div className="card">
      <div className="card__photo-box">
        <img className="card__photo" src={ringPhoto} />
      </div>
      <div className="card__information">
        <h3 className="card__header">Stackable Gold Bands</h3>
        <p className="card__owner">Julia Jewelery</p>
        <div className="card__box">
          <p className="card__description">
            This lightweight classic ring can be paired with a plain gold band
            for understated elegance or layer it up for major style points. It
            can be gently adjusted to accommodate half sizes.
          </p>
          <button className="card__button">Visit Store</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

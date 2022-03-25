import "./AfterSearchPage.scss";
import AfterSearchBar from "../AfterSearchBar/AfterSearchBar";
import ProductCard from "../ProductCard/ProductCard";
import AfterSearchHero from "../AfterSearchHero/AfterSearchHero";

function AfterSearchPage() {
  return (
    <div>
      <AfterSearchBar />
      <AfterSearchHero />
      <h2 className="product-header">See More Products</h2>

      <div className="card-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default AfterSearchPage;

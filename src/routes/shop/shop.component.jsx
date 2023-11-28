import { useContext } from "react";

import ProductsCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/products.context";

import "./shop.styles.scss"

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;

import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  // 🔥 Convert DB image path to frontend asset image
  const getImage = (imagePath) => {
    if (!imagePath) return "";

    const imageName = imagePath.split("/").pop(); // get 1.jpg
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  useEffect(() => {
    API.get(`/products?keyword=${keyword}`)
      .then((res) => {
        const updatedProducts = res.data.map((product) => ({
          ...product,
          image: getImage(product.images?.[0]?.image)
        }));

        setProducts(updatedProducts);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [keyword]);

  return (
    <div className="container">
      <h1>All Products</h1>

      <input
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="input"
      />

      <div className="grid">
        {products.length > 0 ? (
          products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const productsPerPage = 4;

  const getImage = (imagePath) => {
    if (!imagePath) return "";
    const imageName = imagePath.split("/").pop();
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  /* ===== COUNTER ANIMATION ===== */

  useEffect(() => {

    const counters = document.querySelectorAll(".counter, .hero-counter");

    counters.forEach(counter => {

      const target = +counter.getAttribute("data-target");

      let count = 0;

      const updateCounter = () => {

        const increment = target / 80;

        if(count < target){

          count += increment;

          counter.innerText = Math.ceil(count);

          setTimeout(updateCounter,20);

        }else{

          counter.innerText = target + "+";

        }

      };

      updateCounter();

    });

  }, []);

  /* ===== FETCH PRODUCTS ===== */

  useEffect(() => {

    API.get("/products")
      .then((res) => {

        const updatedProducts = res.data.map((product) => ({
          ...product,
          image: getImage(product.images?.[0]?.image)
        }));

        setProducts(updatedProducts);

      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  /* ===== PAGINATION ===== */

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (

    <div className="home">

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <h1>MotorMart Riding Store</h1>

          <p>
            Explore <strong>100+ premium riding products</strong> including helmets,
            gloves, jackets and riding accessories built for safety and performance.
          </p>

          <div className="hero-stats">

            <div>
              <h2 className="hero-counter" data-target="100">0</h2>
              <span>Products</span>
            </div>

            <div>
              <h2 className="hero-counter" data-target="50">0</h2>
              <span>Helmet Models</span>
            </div>

            <div>
              <h2 className="hero-counter" data-target="10">0</h2>
              <span>Top Brands</span>
            </div>

          </div>

          <button
            className="shop-btn"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="categories">

        <h2>Shop By Category</h2>

        <div className="category-slider">

          <div className="category-card">
            <h3>Safety Accessories</h3>
            <p>Helmets, knee guards and protective riding gear.</p>
          </div>

          <div className="category-card">
            <h3>Security Accessories</h3>
            <p>Bike locks, alarms and anti-theft security systems.</p>
          </div>

          <div className="category-card">
            <h3>Maintenance Tools</h3>
            <p>Essential tools for bike repair and maintenance.</p>
          </div>

          <div className="category-card">
            <h3>Lighting Accessories</h3>
            <p>LED lights, indicators and night riding solutions.</p>
          </div>

          <div className="category-card">
            <h3>Electronics & Gadgets</h3>
            <p>Phone mounts, chargers and smart riding gadgets.</p>
          </div>

          <div className="category-card">
            <h3>Storage Accessories</h3>
            <p>Tank bags, saddle bags and luggage solutions.</p>
          </div>

          <div className="category-card">
            <h3>Comfort Accessories</h3>
            <p>Seat cushions, grips and riding comfort upgrades.</p>
          </div>

          <div className="category-card">
            <h3>Performance Accessories</h3>
            <p>Improve speed, control and bike performance.</p>
          </div>

          <div className="category-card">
            <h3>Styling Accessories</h3>
            <p>Custom decals, mirrors and stylish upgrades.</p>
          </div>

          <div className="category-card">
            <h3>Protection Accessories</h3>
            <p>Crash guards, frame sliders and bike protection.</p>
          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="products">

        <h2>Featured Products</h2>

        <div className="product-grid">

          {currentProducts.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}

        </div>

        <div className="pagination">

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          <span>
            Page {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="why">

        <div className="why-header">

          <h2>Why Choose MotorMart</h2>

          <p>
            MotorMart is your trusted destination for premium riding gear and
            motorcycle accessories. We focus on safety, quality and rider comfort.
          </p>

        </div>

        <div className="why-grid">

          <div className="why-card">
            <h3>Premium Quality</h3>
            <p>
              We provide high-quality helmets, jackets, gloves and riding gear
              designed for durability and maximum rider protection.
            </p>
          </div>

          <div className="why-card">
            <h3>Fast Delivery</h3>
            <p>
              Our logistics network ensures quick and reliable delivery so you
              receive your riding gear without delay.
            </p>
          </div>

          <div className="why-card">
            <h3>Secure Payment</h3>
            <p>
              MotorMart supports multiple secure payment methods including UPI,
              cards and digital wallets for safe transactions.
            </p>
          </div>

          <div className="why-card">
            <h3>24/7 Support</h3>
            <p>
              Our support team is available anytime to help with orders,
              product questions and riding gear recommendations.
            </p>
          </div>

          <div className="why-card">
            <h3>100+ Riding Products</h3>
            <p>
              Explore a wide range of helmets, accessories and motorcycle
              equipment from trusted brands.
            </p>
          </div>

          <div className="why-card">
            <h3>Trusted Riders</h3>
            <p>
              Thousands of riders trust MotorMart for reliable motorcycle
              accessories and riding safety gear.
            </p>
          </div>

        </div>

        {/* STATS */}

        <div className="why-stats">

          <div className="stat">
            <h2 className="counter" data-target="100">0</h2>
            <span>Products</span>
          </div>

          <div className="stat">
            <h2 className="counter" data-target="10">0</h2>
            <span>Top Brands</span>
          </div>

          <div className="stat">
            <h2 className="counter" data-target="500">0</h2>
            <span>Happy Riders</span>
          </div>

        </div>

      </section>

    </div>

  );
};

export default Home;
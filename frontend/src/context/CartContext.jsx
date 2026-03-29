import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product, qty) => {

    const exist = cartItems.find(x => x._id === product._id);

    let updatedCart;

    if (exist) {
      updatedCart = cartItems.map(x =>
        x._id === product._id
          ? { ...x, qty }
          : x
      );
    } else {
      updatedCart = [...cartItems, { ...product, qty }];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {

    const updated = cartItems.filter(
      x => x._id !== id
    );

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
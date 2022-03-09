import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [itemsBought, setItemsBought] = useState([]);

  const onAdd = (currentItem) => {
    if (itemsInCart.some(({ item }) => item.id === currentItem.item.id)) return;
    setItemsInCart([...itemsInCart, currentItem]);
  };

  const isInCart = (currentItem) => {
    return itemsInCart.some(({ item }) => item.id === currentItem.item.id)
      ? alert("IN CART")
      : alert("NOT IN CART");
  };

  const onRemove = (itemID) => {
    const filteredItems = itemsInCart.filter((elem) => elem.item.id !== itemID);
    setItemsInCart(filteredItems);
  };

  const onClearCart = () => {
    setItemsBought([...itemsBought, itemsInCart]);
    setItemsInCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        onAdd,
        onRemove,
        onClearCart,
        isInCart,
        products,
        setProducts,
        itemsBought,
        setItemsBought,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

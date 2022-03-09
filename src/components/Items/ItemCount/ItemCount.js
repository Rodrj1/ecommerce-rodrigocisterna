import { useState, useEffect } from "react";
import { ItemCountDetail } from "./ItemCountDetail";

export const ItemCount = ({ stock, setCartQuantity }) => {
  const [count, setCount] = useState(0);
  const [getStock, setGetStock] = useState(stock);

  useEffect(() => {
    setCartQuantity(count);
  }, [count]);

  const onAdd = () => {
    setCount(getStock > 0 ? count + 1 : count);
    setGetStock(getStock > 0 ? getStock - 1 : getStock);
  };

  const onRemove = () => {
    setCount(count > 0 ? count - 1 : count);
    setGetStock(count > 0 ? getStock + 1 : getStock);
  };

  return (
    <ItemCountDetail
      onAdd={onAdd}
      onRemove={onRemove}
      count={count}
      text="Items in Cart"
    />
  );
};

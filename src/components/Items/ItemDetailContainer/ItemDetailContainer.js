import "../Items.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const { id } = useParams();
  const { onAdd } = useContext(CartContext);
  const { isInCart } = useContext(CartContext);
  const [product, getProduct] = useState([]);
  const [productIsActive, setProductIsActive] = useState(false);
  const [productExists, setProductExists] = useState(true);

  useEffect(() => {
    const getUniqueItem = async () => {
      try {
        const db = getFirestore();

        const docRef = await doc(db, "items", id);

        getDoc(docRef).then((snapshot) => {
          if (snapshot.exists()) {
            getProduct({
              ...snapshot.data(),
              id: snapshot.id,
            });
            setProductIsActive(true);
          } else {
            setProductExists(false);
          }
        });
      } catch (e) {}
    };
    getUniqueItem();
  }, []);

  const handleOnAdd = () => {
    cartQuantity > 0 && onAdd({ item: product, cartQuantity });
  };

  const handleIsInCart = () => {
    isInCart({ item: product });
  };

  if (!productExists) {
    return <h1>This item does not exist</h1>;
  }

  return (
    <>
      {productIsActive ? (
        <>
          <ItemDetail
            product={product}
            handleIsInCart={handleIsInCart}
            handleOnAdd={handleOnAdd}
            setCartQuantity={setCartQuantity}
            cartQuantity={cartQuantity}
          />
        </>
      ) : null}
    </>
  );
};

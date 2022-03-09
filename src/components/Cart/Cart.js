import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../Items/Item/Item";
import { Checkout } from "./Checkout";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { CartDetail } from "./CartDetail";

export const Cart = () => {
  const { itemsInCart, onRemove, onClearCart } = useContext(CartContext);

  // * Firestore: Buyer and order related
  // * Firestore: Buyer and order related

  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [orderId, setOrderId] = useState(null);
  const [emailMessage, setEmailMessage] = useState("");
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
    confirmemail: "",
  });
  const checkBuyerState =
    (buyer.name && buyer.phone && buyer.email) != "" ? true : false;

  const sendOrder = () => {
    if (emailFormat.test(buyer.email) && buyer.email === buyer.confirmemail) {
      setEmailMessage("valid-email");
      const order = {
        buyer,
        items: itemsInCart,
        total: subtotal,
      };

      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order)
        .then(({ id }) => setOrderId(id))
        .then(() => {
          const getItemsId = itemsInCart.forEach((item, index) => {
            const getItem = doc(db, "items", item.item.id);
            updateDoc(getItem, {
              stock: item.item.stock - itemsInCart[index].cartQuantity,
            });
          });
        })
        .finally(() => {
          onClearCart();
        });
    } else {
      setEmailMessage("invalid-email");
    }
  };

  useEffect(() => {
    const db = getFirestore();

    if (orderId != null) {
      let date = new Date();
      const getOrderId = doc(db, "orders", orderId);
      updateDoc(getOrderId, { date: date });
      alert(
        `Your order ${orderId} was sent correctly. You bought ${totalItems} items at $${total}`
      );
    }
  }, [orderId]);

  // * Item related
  // * Item related

  let itemsInCartLength = itemsInCart.length;
  let totalItems = 0;
  let subtotal = 0;

  const getItemsQuantity = itemsInCart.map(({ cartQuantity }) => {
    return (totalItems += cartQuantity);
  });

  const getSubtotal = itemsInCart.map(({ item, cartQuantity }) => {
    return (subtotal += item.price * cartQuantity);
  });
  let total = parseFloat(subtotal * 1.25).toFixed(0);

  const handleOnRemove = (itemID) => {
    onRemove(itemID);
  };

  const getItems = itemsInCart.map(({ item }, index) => (
    <CartItem
      key={item.id}
      {...item}
      quantity={itemsInCart[index].cartQuantity}
      handleOnRemove={handleOnRemove}
    />
  ));

  return (
    <>
      {itemsInCartLength > 0 ? (
        <>
          <CartDetail
            onClearCart={onClearCart}
            items={getItems}
            itemsInCartLength={itemsInCartLength}
          />

          <Checkout
            emailMessage={emailMessage}
            itemsInCart={itemsInCart}
            totalItems={totalItems}
            subtotal={subtotal}
            total={total}
            buyer={buyer}
            setBuyer={setBuyer}
            checkBuyerState={checkBuyerState}
            itemsInCartLength={itemsInCartLength}
            sendOrder={sendOrder}
          />
        </>
      ) : (
        <h2>Cart is empty</h2>
      )}
    </>
  );
};

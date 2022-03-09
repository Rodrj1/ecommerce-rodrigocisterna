import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import OrderDetail from "./OrderDetail";
import { Table } from "../Table/Table";

export const OrderList = () => {
  const { itemsBought, setItemsBought } = useContext(CartContext);
  const headers = ["Order ID", "Name", "Items", "Total"];

  useEffect(() => {
    const getFirestoreOrders = async () => {
      const db = getFirestore();
      const ordersCollection = await collection(db, "orders");

      getDocs(ordersCollection).then((snapshot) => {
        setItemsBought(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    getFirestoreOrders();
  }, []);

  return (
    <>
      <Table list={itemsBought} headers={headers} />
    </>
  );
};

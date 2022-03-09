import { useContext, useEffect, useState } from "react";
import "../Items.css";
import { ItemList } from "../ItemList/ItemList";
import { CartContext } from "../../../context/CartContext";

import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { id } = useParams();
  const { products, setProducts } = useContext(CartContext);
  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    const getFirestoreItems = async () => {
      const db = getFirestore();
      const itemsCollection = await collection(db, "items");

      getDocs(itemsCollection).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    getFirestoreItems();
  }, []);

  useEffect(() => {
    try {
      const db = getFirestore();

      const queryGetCategory = query(
        collection(db, "items"),
        where("category", "==", id)
      );

      getDocs(queryGetCategory).then((snapshot) => {
        setFilterItems(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    } catch (e) {}
  }, [id]);

  return <>{<ItemList items={products} filterItems={filterItems} />}</>;
};

export default ItemListContainer;

import { useParams } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({ items, filterItems }) => {
  const { id } = useParams();

  return (
    <>
      {id ? <h2>{id}</h2> : <h2>All Items</h2>}

      <div className="grid-phone">
        {!id
          ? items.map((product) => (
              <div key={product.id}>
                <Item key={product.id} {...product} />
              </div>
            ))
          : filterItems.map((product) => (
              <div key={product.id}>
                <Item key={product.id} {...product} />
              </div>
            ))}
      </div>
    </>
  );
};

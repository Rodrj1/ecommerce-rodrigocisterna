import { ButtonItemFunction } from "../buttons/ButtonItem";

export const CartDetail = ({ onClearCart, items, itemsInCartLength }) => {

  return (
    <>
      {itemsInCartLength > 0 ? (
        <p>
          <ButtonItemFunction
            text={"Remove all items from cart"}
            classN={"itemButton"}
            fn={onClearCart}
          />
        </p>
      ) : null}

      <div className="cartTemplate">{items}</div>
    </>
  );
};

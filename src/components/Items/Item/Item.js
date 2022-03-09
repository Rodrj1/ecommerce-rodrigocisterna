import { ButtonItemNav } from "../../buttons/ButtonItem";

export const Item = ({ id, pictureURL, name }) => {
  return (
    <div className="grid-phone-item">
      <>
        <img src={pictureURL} alt="imagen" />

        <h3>{name.toUpperCase()}</h3>

        <ButtonItemNav
          text="Show Product Details"
          classN={"itemButton"}
          navURL={`/item/${id}`}
        />
      </>
    </div>
  );
};

export const CartItem = ({ id, name, price, quantity, handleOnRemove, pictureURL }) => {
  return (
    <div className="cartTemplate-item">
      <h4>{name}</h4>
      <img src={pictureURL} alt="imagen"/>
      {<p>${price*quantity}</p>} {<p>In Cart: {quantity}</p>}
      <p>
        <ButtonItemNav
          text="Remove From Cart"
          classN={"clearButton"}
          fn={() => handleOnRemove(id)}
        />
      </p>
    </div>
  );
};


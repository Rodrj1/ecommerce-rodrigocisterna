import { ItemCount } from "../ItemCount/ItemCount";
import { ButtonItemFunction } from "../../buttons/ButtonItem";

export const ItemDetail = ({
  product,
  handleOnAdd,
  handleIsInCart,
  setCartQuantity,
  cartQuantity
}) => {

  return (
    <>
      <div className="flex-itemdetail">
        <div className="flex-itemdetail-item itemdetail-image">
          <img src={product.pictureURL} />
          <ItemCount stock={product.stock} setCartQuantity={setCartQuantity} />
        </div>

        <div className="flex-itemdetail-item itemdetail-description">
          <p>
            {product.name.toUpperCase()}
            <br /><br />

            Price: ${product.price}
            <br /><br />

            Internal Memory: {product.intMemory}
            <br /><br />

            {product.ramMemory ? 
            `RAM: ${product.ramMemory}` 
            : null}
            <br /><br />

            Category: {product.category}
            <br /><br />
            
            Current Stock: {product.stock - cartQuantity}
          </p>

          <ButtonItemFunction
            text="Add To Cart"
            classN={"clearButton"}
            fn={handleOnAdd}
          />

          <ButtonItemFunction
            text="Check if the item is in cart"
            classN={"clearButton"}
            fn={handleIsInCart}
          />

        </div>

      </div>
    </>
  );
};
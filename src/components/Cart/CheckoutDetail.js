import { ButtonItemFunction } from "../buttons/ButtonItem";
const CheckoutDetail = ({
  itemsInCartLength,
  totalItems,
  checkBuyerState,
  mapInputs,
  emailMessage,
  total,
  subtotal,
  sendOrder,
}) => {
  const regexPrice = /\B(?=(\d{3})+(?!\d))/g;
  return (
    <>
      {itemsInCartLength > 0 ? (
        <div className="form">
          <h4>CHECKOUT </h4>
          <br />
          <p className="checkout-p">
            Subtotal({totalItems} productos): $
            {subtotal.toString().replace(regexPrice, ",")}
          </p>
          <p className="checkout-p">
            Total(Taxes 14%): ${total.toString().replace(regexPrice, ",")}
          </p>

          {!checkBuyerState && <h6>All fields are required</h6>}

          {mapInputs}
          <p className={`checkout-p ${emailMessage}`}>
            {emailMessage == "invalid-email"
              ? `${emailMessage.toUpperCase()} = Either using an invalid email or the confirmation email is not the same`
              : emailMessage.toUpperCase()}
          </p>

          {checkBuyerState ? (
            <ButtonItemFunction
              text={"Send Order"}
              classN={"itemButton"}
              fn={sendOrder}
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default CheckoutDetail;

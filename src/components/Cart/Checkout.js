import CheckoutDetail from "./CheckoutDetail";

const inputs = [
  {
    name: "name",
  },
  {
    name: "phone",
  },
  {
    name: "email",
  },
  {
    name: "confirmemail",
  },
];

export const Checkout = ({
  buyer,
  setBuyer,
  checkBuyerState,
  sendOrder,
  itemsInCartLength,
  totalItems,
  subtotal,
  total,
  emailMessage,
}) => {
  
  const handleOnChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const mapInputs = inputs.map((input) => (
    <div key={input.name} className="form-section">
      <input
        required
        value={buyer[input.name]}
        name={input.name}
        onChange={handleOnChange}
      />
      <label htmlFor="name">{input.name} *</label>
    </div>
  ));

  return (
    <>
      <CheckoutDetail
        itemsInCartLength={itemsInCartLength}
        mapInputs={mapInputs}
        totalItems={totalItems}
        checkBuyerState={checkBuyerState}
        emailMessage={emailMessage}
        sendOrder={sendOrder}
        total={total}
        subtotal={subtotal}
      />
    </>
  );
};

import CartIcon from "../../../icons/CartIcon";

export const ItemCountDetail = ({ count, onAdd, onRemove, text }) => {
  return (
    <div className="itemdetail-counter">
      <div>
        <button onClick={onAdd}>+</button>
        <CartIcon />
        {text}: [{count}]
        <button onClick={onRemove}>-</button>
      </div>
    </div>
  );
};

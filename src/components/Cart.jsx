import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-4xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="my-5 p-2 text-lg bg-orange-100 hover:bg-orange-200 border border-orange-200  rounded-xl"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h2 className="text-lg">Cart is empty add items to cart</h2>
        )}
        <ItemList item={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

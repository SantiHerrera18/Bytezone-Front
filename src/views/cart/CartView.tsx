import Cart from "@/components/Cart/CartList";
import { getCookiesServer } from "@/helpers/cookies";

const CartView = () => {
  const userData = getCookiesServer();
  return (
    <div>
      <Cart token={userData.token} />
    </div>
  );
};

export default CartView;

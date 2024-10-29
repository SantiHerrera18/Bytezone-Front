/* eslint-disable react/no-unescaped-entities */
import getOrders from "@/helpers/getOrders";
import { IOrders } from "@/interfaces/orders";
import CartProductCart from "../Cart/CartProductCart";
import { getCookiesServer } from "@/helpers/cookies";

const Orders = async () => {
  const { token } = getCookiesServer();
  const orders: IOrders[] = await getOrders(token);

  return (
    <div className="  ">
      <div className="">
        {orders.length ? (
          orders.map((order, key) => {
            return (
              <div
                className="w-3/5 bg-purple-200 border-t-2 border-purple-700 p-3 text-center rounded-lg m-auto my-7 flex flex-col gap-4 h-72 overflow-y-auto overflow-x-hidden min-w-fit"
                key={key}
              >
                <div className="flex justify-between gap-5 items-center">
                  <h2 className="text-lg inline-block w-fit font-semibold">
                    Order N°{order.id}
                  </h2>

                  <h2 className="text-lg inline-block font-semibold w-fit">
                    {new Date().toLocaleDateString("es-ES")}
                  </h2>
                  <h2 className="text-lg inline-block w-fit">{order.status}</h2>
                </div>

                {order.products.map((product, key) => {
                  return (
                    <CartProductCart
                      {...product}
                      key={key}
                      removeProduct={undefined}
                    />
                  );
                })}
              </div>
            );
          })
        ) : (
          <h2 className="w-full text-center mt-20 text-xl">
            You don't have orders yet
          </h2>
        )}
      </div>
    </div>
  );
};

export default Orders;

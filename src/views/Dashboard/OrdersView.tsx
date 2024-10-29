import Orders from "@/components/Dashboard/Orders";

const OrdersView = () => {
  return (
    <div className="h-full text-center mt-5">
      <h2 className="w-fit inline-block mt-7 text-2xl font-semibold">
        These are your orders
      </h2>
      <Orders />
    </div>
  );
};

export default OrdersView;

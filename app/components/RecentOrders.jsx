function RecentOrders() {
  const recentOrders = [
    {
      name: "Refrigerator",
      price: "$200",
      payment: "paid",
      status: "delivered",
    },

    {
      name: "Refrigerator",
      price: "$200",
      payment: "paid",
      status: "pending",
    },

    {
      name: "Refrigerator",
      price: "$200",
      payment: "paid",
      status: "return",
    },

    {
      name: "Refrigerator",
      price: "$200",
      payment: "paid",
      status: "In progress",
    },

    {
      name: "Refrigerator",
      price: "$200",
      payment: "paid",
      status: "delivered",
    },

    {
      name: "Refrigerator",
      price: "$200",
      payment: "paid",
      status: "pending",
    },

    {
      name: "Refrigerator",
      price: "$200",
      payment: "paid",
      status: "return",
    },

    {
      name: "Refrigerator",
      price: "$200",
      payment: "paid",
      status: "In progress",
    },

    {
      name: "Refrigerator",
      price: "$200",
      payment: "paid",
      status: "delivered",
    },

    {
      name: "Refrigerator",
      price: "$200",
      payment: "paid",
      status: "pending",
    },

    {
      name: "Refrigerator",
      price: "$200",
      payment: "paid",
      status: "return",
    },

    {
      name: "Refrigerator",
      price: "$200",
      payment: "paid",
      status: "In progress",
    },
  ];

  return (
    <section className="shadow-md p-3 h-full rounded-lg gap-2 w-[65%] grid grid-cols-10">
      <h1 className="col-span-6 text-2xl text-blue-500">Recent Orders</h1>

      <div className="col-span-4 text-end">
        <button className="bg-blue-500 px-3 rounded-lg py-2 text-white">
          View All
        </button>
      </div>

      <strong className="col-span-4">Name</strong>
      <strong className="col-span-1">Price</strong>
      <strong className="col-span-1">Payment</strong>
      <strong className="col-span-4 text-end">Status</strong>

      {recentOrders.map((order, index) => (
        <section
          className="border-b-[1px] border-gray-300 py-1 col-span-10 grid grid-cols-10 gap-5"
          key={index}
        >
          <span className="col-span-4">{order.name}</span>
          <span className="col-span-1">{order.price}</span>
          <span className="col-span-1">{order.payment}</span>

          <div className="col-span-4 text-end">
            <span
              className={`text-end p-1 text-white rounded-md ${
                order.status === "delivered"
                  ? "bg-green-600"
                  : order.status === "pending"
                  ? "bg-yellow-300"
                  : order.status === "return"
                  ? "bg-red-500"
                  : "bg-blue-300"
              }`}
            >
              {order.status}
            </span>
          </div>
        </section>
      ))}
    </section>
  );
}

export default RecentOrders;

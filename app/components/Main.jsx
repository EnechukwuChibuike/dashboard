import Header from "./Header";
import RecentCustomers from "./RecentCustomers";
import RecentOrders from "./RecentOrders";
import Stats from "./Stats";

function Main() {
  return (
    <section className="w-[80%] px-5 overflow-auto">
      <Header />
      <Stats />

      <section className="flex justify-between h-[100vh]">
        <RecentOrders />
        <RecentCustomers />
      </section>
    </section>
  );
}

export default Main;

import Image from "next/image";
import React from "react";

function RecentCustomers() {
  const recentCustomers = [
    {
      image: "/man.jpg",
      name: "David",
      country: "Nigeria",
    },
    {
      image: "/man.jpg",
      name: "David",
      country: "Nigeria",
    },
    {
      image: "/man.jpg",
      name: "David",
      country: "Nigeria",
    },
    {
      image: "/man.jpg",
      name: "David",
      country: "Nigeria",
    },
    {
      image: "/man.jpg",
      name: "David",
      country: "Nigeria",
    },
    {
      image: "/man.jpg",
      name: "David",
      country: "Nigeria",
    },
    {
      image: "/man.jpg",
      name: "David",
      country: "Nigeria",
    },
    {
      image: "/man.jpg",
      name: "David",
      country: "Nigeria",
    },
  ];
  return (
    <section className="h-full shadow-md rounded-lg w-[30%] p-3">
      <h1 className="text-2xl text-blue-500 mb-5">Recent Customers</h1>

      <section className="grid gap-6">
        {recentCustomers.map((customer, index) => (
          <section className="flex gap-2" key={index}>
            <Image
              src={customer.image}
              alt={customer.name}
              width={100}
              height={100}
              className="w-12 h-12 rounded-full"
            />

            <div className="grid content-start">
              <strong>{customer.name}</strong>
              <small className="text-gray-400">{customer.country}</small>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}

export default RecentCustomers;

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa6";
import { RiBankCardLine } from "react-icons/ri";

function Stats() {
  const stats = [
    {
      number: 1000,
      name: "Daily Views",
      icon: <MdOutlineRemoveRedEye />,
    },
    {
      number: 1000,
      name: "Sales",
      icon: <BsCart3 />,
    },
    {
      number: 1000,
      name: "Comments",
      icon: <FaRegComments />,
    },
    {
      number: 1000,
      name: "Earning",
      icon: <RiBankCardLine />,
    },
  ];

  return (
    <section className="flex justify-between py-3">
      {stats.map((stat, index) => (
        <section
          className="w-[23%] shadow-lg rounded-xl px-3 py-5 flex justify-between"
          key={index}
        >
          <div>
            <h1 className="text-3xl text-blue-500">{stat.number}</h1>
            <p className="text-gray-500">{stat.name}</p>
          </div>

          <span className="text-4xl text-gray-500">{stat.icon}</span>
        </section>
      ))}
    </section>
  );
}

export default Stats;

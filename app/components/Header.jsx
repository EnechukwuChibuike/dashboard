import { MdMenu } from "react-icons/md";

function Header() {
  return (
    <header className="h-[10vh] flex justify-between items-center">
      <button className="text-4xl">
        <MdMenu />
      </button>

      <input
        type="text"
        className="w-[45%] h-[6vh] rounded-xl border-[1px] border-gray-700 pl-5"
        placeholder="Search here"
      />

      <div className="text-white flex justify-center items-center w-10 h-10 rounded-full bg-blue-500">
        EC
      </div>
    </header>
  );
}

export default Header;

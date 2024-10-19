import Link from "next/link";

function Sidebar() {
  return (
    <aside className="w-[20%] bg-blue-500 text-white grid p-5 gap-10 content-start">
      <strong>Logo.</strong>

      <nav className="grid gap-10">
        <Link href="/about">About</Link>
        <Link href="/about">About</Link>
        <Link href="/about">About</Link>
        <Link href="/about">About</Link>
        <Link href="/about">About</Link>
        <Link href="/about">About</Link>
        <Link href="/about">About</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;

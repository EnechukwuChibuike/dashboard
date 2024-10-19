import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="h-screen flex">
      <Sidebar />
      <Main />
    </main>
  );
}

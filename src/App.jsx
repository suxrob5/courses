import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
export const App = () => {
  return (
    <>
      <header className="mt-6">
        <Header />
      </header>

      <main >
        <Outlet />
      </main>
    </>
  );
};

import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { NavBar } from "../nav/NavBar";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", minHeight: "85vh" }}>
        <NavBar />
        {children}
      </div>
      <Footer />
    </>
  );
};

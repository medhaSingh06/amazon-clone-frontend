/* eslint-disable react/prop-types */
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="content">{children}</main>
      <Footer style={{ paddingTop: "20px" }} />
    </div>
  );
};

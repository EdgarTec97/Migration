import React from "react";
import Footer from "@/components/public/Layout/Footer";
import Header from "@/components/public/Layout/Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

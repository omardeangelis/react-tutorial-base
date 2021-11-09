import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <h2> Header </h2>
      {children}
      <h4>Footer</h4>
    </>
  );
};

export default Layout;

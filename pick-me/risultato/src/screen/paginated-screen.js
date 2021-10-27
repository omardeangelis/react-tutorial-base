import React from "react";
import Layout from "../components/layout";

const PaginatedScreen = (props) => {
  return <Layout>{props.page}</Layout>;
};

export default PaginatedScreen;

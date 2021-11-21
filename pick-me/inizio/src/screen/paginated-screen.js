import React, { useCallback, useEffect, useState } from "react";
import Layout from "../components/layout";
import { useSelector, useDispatch } from "react-redux";
import PhotoSection from "../components/Photo-Section";
import Paginator from "../components/Paginator";
// import { Container, Stack } from "../components/styled";
// import { rowalizer } from "../utils/helpers";
import { useParams } from "@reach/router";

const PaginatedScreen = () => {
  return (
    <Layout>
      <h1>Paginated</h1>
    </Layout>
  );
};

export default PaginatedScreen;

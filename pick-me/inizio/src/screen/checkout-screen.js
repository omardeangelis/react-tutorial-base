import React from "react";
import Layout from "../components/layout";
// import {
//   Container,
//   Box,
//   Stack,
//   Button,
//   InputWrapper,
// } from "../components/styled";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Formik } from "formik";
import * as Yup from "yup";

const CheckoutScreen = () => {
  return (
    <Layout>
      <h1>Checkout</h1>
    </Layout>
  );
};

export default CheckoutScreen;

import React, { useEffect } from "react";
import { Container } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/reducers/api-reducer";
const HomeBody = () => {
  const dispatch = useDispatch();
  const { photos, error, loading } = useSelector((state) => state.photos);

  console.log(photos, error, loading);
  useEffect(() => dispatch(fetchData("photos")), [dispatch]);
  return (
    <Container>
      <div>Ciao</div>
    </Container>
  );
};

export default HomeBody;

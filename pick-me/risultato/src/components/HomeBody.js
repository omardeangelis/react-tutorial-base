import React, { useCallback, useEffect } from "react";
import { Container } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/reducers/api-reducer";
const HomeBody = () => {
  const dispatch = useDispatch();
  const { photos, error, loading, rate_limit } = useSelector(
    (state) => state.photos
  );

  console.log("FROM COMPONENT", photos, error, loading, rate_limit);

  const fetchLatestPhotos = useCallback(() => {
    dispatch(fetchData("photos?per_page=5&page=3&order_by=latest"));
  }, [dispatch]);
  useEffect(() => fetchLatestPhotos(), [fetchLatestPhotos]);
  return (
    <Container>
      <div>Ciao</div>
    </Container>
  );
};

export default HomeBody;

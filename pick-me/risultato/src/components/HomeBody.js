import React, { useCallback } from "react";
import { Button, Container } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/reducers/api-reducer";
const HomeBody = () => {
  const dispatch = useDispatch();
  const { photos, error, loading, rate_limit } = useSelector(
    (state) => state.photos
  );

  console.log("FROM COMPONENT", photos, error, loading, rate_limit);

  // const fetchLatestPhotos = useCallback(() => {
  //   dispatch(fetchData("photos?per_page=5&page=3&order_by=latest"));
  // }, [dispatch]);

  const searchPhotos = useCallback(() => {
    dispatch(fetchData("search/photos?query=react&per_page=5&page=1"));
  }, [dispatch]);
  // useEffect(() => fetchLatestPhotos(), [fetchLatestPhotos]);
  return (
    <Container>
      <Button variant='contained' size='md' onClick={searchPhotos}>
        Cerca
      </Button>
    </Container>
  );
};

export default HomeBody;

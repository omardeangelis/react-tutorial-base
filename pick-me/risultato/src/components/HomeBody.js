import React, { useCallback } from "react";
import { Box, Button, Container, InputWrapper, Stack } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/reducers/api-reducer";
import { ReactComponent as SearchIcon } from "../images/search-media.svg";
import PhotoSection from "./Photo-Section";
import { rowalizer, generateUID } from "../utils/helpers";
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
    dispatch(fetchData("search/photos?query=react&per_page=12&page=1"));
  }, [dispatch]);
  // useEffect(() => fetchLatestPhotos(), [fetchLatestPhotos]);
  return (
    <Container size='fullwidth'>
      <Container>
        <Button variant='contained' size='md' onClick={searchPhotos}>
          Cerca
        </Button>
      </Container>

      <Container mt='96px'>
        <Stack justify='space-between' align='end'>
          <h4>search your photos</h4>
          <p
            style={{
              color: "var(--grey-700)",
            }}
          >
            {`Request: ${rate_limit.remaining}/${rate_limit.total}`}
          </p>
        </Stack>
        <Box mt='24px'>
          <Stack
            width='fit-content'
            bg='grey.900'
            borderRadius='100px'
            border='1px solid'
            borderColor='grey.700'
            px='18px'
            style={{
              overflowX: "hidden",
            }}
          >
            <InputWrapper
              placeholder='cerca la tua foto'
              border='none'
              pl='0px'
            />
            <Button
              rightIcon={<SearchIcon />}
              isLoading={false}
              variant={"text"}
              iconColor='grey.700'
              bg='grey.900'
            ></Button>
          </Stack>
        </Box>
      </Container>

      <Container mt='72px'>
        <Stack direction='column' spacing='118px'>
          {!loading && photos?.results?.length > 0 ? (
            rowalizer(photos.results).map((row) => (
              <PhotoSection row={row} key={generateUID()} />
            ))
          ) : (
            <h3>Loading...</h3>
          )}
          <Stack justify='flex-end'>
            <p
              style={{
                color: "var(--grey-700)",
              }}
            >
              {`Item per page ${12}`}
            </p>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
};

export default HomeBody;

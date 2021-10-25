import React from "react";
import {
  InputWrapper as Input,
  Container,
  Box,
  Button,
  Stack,
} from "../components/styled";
import { ReactComponent as RightIcon } from "../images/right-arrow.svg";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/reducers/cart-reducer";
const HomePage = () => {
  const { value } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(value);
  return (
    <Container size='xl'>
      <Stack
        direction='column'
        spacing='40px'
        align='flex-start'
        justify='flex-start'
        width='100%'
      >
        <Input placeholder='input' />
        <Input placeholder='input' />
        <Stack align='center' spacing='20px'>
          <Button variant='contained' size='sm'>
            Premimi
          </Button>
          <Button variant='outlined' size='md'>
            Premimi
          </Button>
          <Button
            variant='contained'
            onClick={() => dispatch(increment())}
            size='lg'
            rightIcon={<RightIcon />}
            iconColor='white'
          >
            Premimi
          </Button>

          <Button
            variant='contained'
            size='xl'
            onClick={() => dispatch(decrement())}
          >
            Premimi
          </Button>
        </Stack>

        <Box
          height='200px'
          bg='grey.900'
          width='200px'
          borderRadius='20px'
        ></Box>
      </Stack>
    </Container>
  );
};

export default HomePage;

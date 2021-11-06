import React from "react";
import Layout from "../components/layout";
import {
  Container,
  Box,
  Stack,
  Button,
  InputWrapper,
} from "../components/styled";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { removeFromCart, cleanCart } from "../redux/reducers/cart-reducer";

const CheckoutScreen = (props) => {
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <Layout>
      <Container size='fullwidth' mb='118px'>
        <Container mt='96px'>
          <Box>
            <h1>Carrello</h1>
          </Box>
          <Stack justify='space-between' spacing='64px' align='start' mt='72px'>
            <Stack direction='column' spacing='48px' flex='1 1 auto'>
              <Stack justify='flex-end' onClick={() => dispatch(cleanCart())}>
                <Button variant='text' size='sm'>
                  Remove all
                </Button>
              </Stack>
              {cart && cart.length > 0 ? (
                cart.map((item) => {
                  return (
                    <Box key={item.id}>
                      <Stack justify='space-between' align='start'>
                        <Stack spacing='24px'>
                          <Box
                            position='relative'
                            overflow='hidden'
                            maxWidth='160px'
                            maxHeight='90px'
                            borderRadius='4px'
                            width='100%'
                            height='100%'
                            transform='translateZ(0)'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                          >
                            <img
                              src={item.url}
                              alt='library'
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </Box>
                          <Stack
                            direction='column'
                            align='start'
                            justify='space-between'
                          >
                            <Box color='purple.300'>
                              <h5>Categoria</h5>
                            </Box>
                            <Box>
                              <h6
                                style={{
                                  color: "grey.700",
                                }}
                              >
                                Artista
                              </h6>

                              <p>Titolo - {item.likes}€</p>
                            </Box>
                          </Stack>
                        </Stack>
                        <Button
                          variant='text'
                          size='md'
                          iconColor='purple.300'
                          onClick={() => {
                            dispatch(removeFromCart(item));
                          }}
                          rightIcon={<RiDeleteBack2Fill size={24} />}
                        ></Button>
                      </Stack>
                    </Box>
                  );
                })
              ) : (
                <h4>Nessun Elemento nel Carrello</h4>
              )}
            </Stack>

            <Box
              border='1px solid'
              borderColor='grey.700'
              borderRadius='8px'
              px='36px'
              py='56px'
              bg='grey.900'
              maxWidth='534px'
            >
              <Box mb='36px'>
                <h3>Dati di pagamento</h3>
              </Box>

              <form>
                <Stack direction='column' spacing='36px'>
                  <Stack justify='space-between' align='center'>
                    <InputWrapper width='200px' placeholder='nome' />
                    <InputWrapper width='200px' placeholder='cognome' />
                  </Stack>
                  <InputWrapper placeholder='carta di credito' />
                  <Stack spacing='10px' align='center'>
                    <InputWrapper width='238px' placeholder='Indirizzo' />
                    <InputWrapper width='100px' placeholder='Numero' />
                    <InputWrapper width='100px' placeholder='CAP' />
                  </Stack>
                  <Stack justify='space-between' align='center'>
                    <h2>{total} €</h2>
                    <Button type='submit' variant='contained' size='md'>
                      Procedi all'acquisto
                    </Button>
                  </Stack>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Container>
      </Container>
    </Layout>
  );
};

export default CheckoutScreen;

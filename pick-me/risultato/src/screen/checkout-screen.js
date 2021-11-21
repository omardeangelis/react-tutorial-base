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
import {
  removeFromCart,
  cleanCart,
  payOrder,
} from "../redux/reducers/cart-reducer";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .max(75, "Can not have more then 75 characters")
    .min(2, "Please insert at least 2 charcater")
    .required("You must provide a name"),
  cognome: Yup.string()
    .max(100, "Can not have more then 100 characters")
    .min(2, "Please insert at least 2 charcater")
    .required("You must provide a surname"),
  card: Yup.string()
    .max(25, "Card Must have 25 number")
    .min(25, "Card must have 25 number")
    .required(),
  address: Yup.string()
    .max(75, "Can not have more then 75 characters")
    .min(2, "Please insert at least 2 charcater")
    .required("You must provide a valid address"),

  civico: Yup.number()
    .max(10000, "Can't be greater than 10.000, 00")
    .positive("You can't provide negative number")
    .moreThan(0, "0 is not allowed")
    .required("Insert Civico"),
  cap: Yup.string()
    .max(10, "Allowed Max 10 char")
    .min(3, "Insert at least 3 char")
    .required("You must provide a valid address"),
});

const initialValues = {
  name: "",
  cognome: "",
  card: "",
  address: "",
  civico: "",
  cap: "",
};

const CheckoutScreen = () => {
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
              <Stack justify='flex-end'>
                <Button
                  variant='text'
                  size='sm'
                  onClick={() => dispatch(cleanCart())}
                >
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

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    dispatch(payOrder());
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  isValid,
                  dirty,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Stack direction='column' spacing='36px'>
                      <Stack justify='space-between' align='center'>
                        <Box>
                          <InputWrapper
                            onChange={handleChange}
                            value={values.name}
                            width='200px'
                            name='name'
                            onBlur={handleBlur}
                            borderColor={
                              errors.name ? "var(--error)" : "initial"
                            }
                            placeholder='nome'
                          />
                          {touched.name && errors.name ? (
                            <p
                              style={{
                                color: "var(--error)",
                                marginTop: "6px",
                                fontSize: "8px",
                                textAlign: "right",
                              }}
                            >
                              {errors.name}
                            </p>
                          ) : (
                            <div
                              style={{
                                height: "8px",
                              }}
                            ></div>
                          )}
                        </Box>
                        <Box>
                          <InputWrapper
                            onChange={handleChange}
                            value={values.cognome}
                            width='200px'
                            name='cognome'
                            placeholder='cognome'
                            borderColor={
                              errors.cognome ? "var(--error)" : "initial"
                            }
                            onBlur={handleBlur}
                          />
                          {touched.cognome && errors.cognome ? (
                            <p
                              style={{
                                color: "var(--error)",
                                marginTop: "6px",
                                fontSize: "8px",
                                textAlign: "right",
                              }}
                            >
                              {errors.cognome}
                            </p>
                          ) : (
                            <div
                              style={{
                                height: "8px",
                              }}
                            ></div>
                          )}
                        </Box>
                      </Stack>
                      <Box width='100%'>
                        <InputWrapper
                          width='100%'
                          onChange={handleChange}
                          value={values.card}
                          placeholder='carta di credito'
                          borderColor={errors.card ? "var(--error)" : "initial"}
                          name='card'
                          onBlur={handleBlur}
                        />
                        {touched.card && errors.card ? (
                          <p
                            style={{
                              color: "var(--error)",
                              marginTop: "6px",
                              fontSize: "8px",
                              textAlign: "right",
                            }}
                          >
                            {errors.card}
                          </p>
                        ) : (
                          <div
                            style={{
                              height: "8px",
                            }}
                          ></div>
                        )}
                      </Box>
                      <Stack spacing='10px' align='center'>
                        <Box>
                          <InputWrapper
                            onChange={handleChange}
                            value={values.address}
                            width='238px'
                            name='address'
                            placeholder='Indirizzo'
                            borderColor={
                              errors.address ? "var(--error)" : "initial"
                            }
                            onBlur={handleBlur}
                          />
                          {touched.address && errors.address ? (
                            <p
                              style={{
                                color: "var(--error)",
                                marginTop: "6px",
                                fontSize: "8px",
                                textAlign: "right",
                              }}
                            >
                              {errors.address}
                            </p>
                          ) : (
                            <div
                              style={{
                                height: "8px",
                              }}
                            ></div>
                          )}
                        </Box>
                        <Box>
                          <InputWrapper
                            onChange={handleChange}
                            value={values.civico}
                            width='100px'
                            name='civico'
                            placeholder='Numero'
                            borderColor={
                              errors.civico ? "var(--error)" : "initial"
                            }
                            onBlur={handleBlur}
                          />
                          {touched.civico && errors.civico ? (
                            <p
                              style={{
                                color: "var(--error)",
                                marginTop: "6px",
                                fontSize: "8px",
                                textAlign: "right",
                              }}
                            >
                              {errors.civico}
                            </p>
                          ) : (
                            <div
                              style={{
                                height: "8px",
                              }}
                            ></div>
                          )}
                        </Box>
                        <Box>
                          <InputWrapper
                            onChange={handleChange}
                            value={values.cap}
                            width='100px'
                            name='cap'
                            placeholder='CAP'
                            borderColor={
                              errors.name ? "var(--error)" : "initial"
                            }
                            onBlur={handleBlur}
                          />
                          {touched.cap && errors.cap ? (
                            <p
                              style={{
                                color: "var(--error)",
                                marginTop: "6px",
                                fontSize: "8px",
                                textAlign: "right",
                              }}
                            >
                              {errors.cap}
                            </p>
                          ) : (
                            <div
                              style={{
                                height: "8px",
                              }}
                            ></div>
                          )}
                        </Box>
                      </Stack>
                      <Stack justify='space-between' align='center'>
                        <h2>{total} €</h2>
                        <Button
                          type='submit'
                          variant={
                            isSubmitting || !isValid || !dirty
                              ? "disabled"
                              : "contained"
                          }
                          size='md'
                          disabled={isSubmitting}
                        >
                          Procedi all'acquisto
                        </Button>
                      </Stack>
                    </Stack>
                  </form>
                )}
              </Formik>
            </Box>
          </Stack>
        </Container>
      </Container>
    </Layout>
  );
};

export default CheckoutScreen;

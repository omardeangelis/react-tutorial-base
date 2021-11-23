import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import { Container } from "../components/styled";
import HomeBody from "../components/HomeBody";

const HomePage = () => {
  return (
    <Layout>
      <Container size='fullwidth'>
        <Hero />
        <HomeBody />
      </Container>
    </Layout>
  );
};

export default HomePage;

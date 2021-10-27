import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import { Container } from "../components/styled";

const HomePage = () => {
  return (
    <Layout>
      <Container size='fullwidth'>
        <Hero />
      </Container>
    </Layout>
  );
};

export default HomePage;

import React, { useEffect } from "react";
import { Container } from "./styled";
import instance from "../api";
const HomeBody = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await instance.get("photos");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <Container>
      <div>Ciao</div>
    </Container>
  );
};

export default HomeBody;

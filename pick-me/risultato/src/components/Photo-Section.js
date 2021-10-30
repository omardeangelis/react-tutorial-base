import React from "react";
import { generateUID } from "../utils/helpers";
import Photo from "./Photo";
import { Stack } from "./styled";

const PhotoSection = ({ row, index }) => {
  return (
    <Stack justify='flex-start' spacing='20px'>
      {row.map((photo, i) => {
        return <Photo key={generateUID()} {...photo} />;
      })}
    </Stack>
  );
};

export default PhotoSection;

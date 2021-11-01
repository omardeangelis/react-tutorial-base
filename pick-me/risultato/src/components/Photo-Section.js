import React from "react";
import Photo from "./Photo";
import { Stack } from "./styled";

const PhotoSection = ({ row, index }) => {
  return (
    <Stack justify='flex-start' spacing='20px'>
      {row.map((photo) => {
        return <Photo key={photo.id} {...photo} />;
      })}
    </Stack>
  );
};

export default PhotoSection;

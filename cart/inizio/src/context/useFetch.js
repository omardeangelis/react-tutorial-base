import { useState, useEffect } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  return { data, isLoading };
};

export default useFetch;

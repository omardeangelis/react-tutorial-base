import { useState, useContext, createContext } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [query, setQuery] = useState("negroni");
  const { isLoading, data, isError, count } = useFetch(`s=${query}`);
  //SIDEBAR FUNCTIONS
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  //END SIDEBAR FUNCTION

  const searchCocktail = (input) => {
    setQuery(input);
  };

  const getScrollPosition = (value) => {
    setScrollPosition(value);
  };

  const deleteScrollPosition = () => {
    setScrollPosition(0);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        searchCocktail,
        getScrollPosition,
        deleteScrollPosition,
        scrollPosition,
        isLoading,
        isError,
        count,
        query,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

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

  //Cerca cocktail: Quando cambia Query, ho un nuovo rendere di useFetch
  const searchCocktail = (input) => {
    setQuery(input);
  };

  //Aggiorno lo state con la posizione in cui ho cliccato sulla ricetta
  const getScrollPosition = (value) => {
    setScrollPosition(value);
  };

  //Imposto state dello scroll position a 0
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

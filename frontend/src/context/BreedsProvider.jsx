import { useState, createContext } from "react";

const BreedsContext = createContext();

const BreedsProvider = ({ children }) => {
  //State of the search bar
  const [search, setSearch] = useState({
    categoria: "",
  });

  return (
    <BreedsContext.Provider value={{ search, setSearch }}>
      {children}
    </BreedsContext.Provider>
  );
};

export { BreedsProvider };

export default BreedsContext;

import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BreedsContext = createContext();

const BreedsProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState({
    categoria: "",
  });

  return (
    <BreedsContext.Provider value={{ busqueda, setBusqueda }}>
      {children}
    </BreedsContext.Provider>
  );
};

export { BreedsProvider };

export default BreedsContext;

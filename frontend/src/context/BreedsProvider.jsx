import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BreedsContext = createContext();

const BreedsProvider = ({ children }) => {
  const [breedsId, setBreedsId] = useState({});

  const getCatIds = async (datos) => {
    try {
      const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${datos.categoria}`;
      const { data } = await axios(url);
      setBreedsId(data[0].breeds[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BreedsContext.Provider value={{ getCatIds, breedsId }}>
      {children}
    </BreedsContext.Provider>
  );
};

export { BreedsProvider };

export default BreedsContext;

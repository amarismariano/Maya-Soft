import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CatsContext = createContext();

const CatsProvider = ({ children }) => {
  const [breeds, setBreeds] = useState([]);
  const [names, setNames] = useState([]);
  const [cats, setCats] = useState([]);

  const getCats = async () => {
    try {
      const url1 = "https://api.thecatapi.com/v1/breeds";
      const { data } = await axios.get(url1);
      setBreeds(data);
      setNames(data);
      setCats(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <CatsContext.Provider value={{ breeds, names, cats }}>
      {children}
    </CatsContext.Provider>
  );
};

export { CatsProvider };

export default CatsContext;

import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CatsContext = createContext();

const CatsProvider = ({ children }) => {
  const [breeds, setBreeds] = useState([]);
  const [names, setNames] = useState([]);
  const [cats, setCats] = useState([]);

  //Modal
  const [modal, setModal] = useState(false);

  /**
   *
   */

  const getCats = async () => {
    try {
      const url = "https://api.thecatapi.com/v1/breeds";
      const { data } = await axios(url);
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

  const handleModalClick = () => {
    setModal(!modal);
  };

  return (
    <CatsContext.Provider
      value={{ breeds, names, cats, handleModalClick, modal }}
    >
      {children}
    </CatsContext.Provider>
  );
};

export { CatsProvider };

export default CatsContext;

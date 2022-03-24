import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CatsContext = createContext();

const CatsProvider = ({ children }) => {
  const [breeds, setBreeds] = useState([]);
  const [names, setNames] = useState([]);
  const [cats, setCats] = useState([]);
  const [allCats, setAllCats] = useState([]);
  const [loading, setLoading] = useState(false);

  //Modal
  const [modal, setModal] = useState(false);

  const getCats = async () => {
    try {
      setLoading(true);
      const url = "https://api.thecatapi.com/v1/breeds";
      const { data } = await axios(url);
      setBreeds(data);
      setNames(data);
      setCats(data);
      setAllCats(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
      value={{
        breeds,
        names,
        cats,
        modal,
        loading,
        allCats,
        handleModalClick,
        getCats,
        setCats,
      }}
    >
      {children}
    </CatsContext.Provider>
  );
};

export { CatsProvider };

export default CatsContext;

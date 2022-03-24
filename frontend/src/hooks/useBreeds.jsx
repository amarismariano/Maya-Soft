import { useContext } from "react";
import BreedsContext from "../context/BreedsProvider";

const useBreeds = () => {
  return useContext(BreedsContext);
};

export default useBreeds;

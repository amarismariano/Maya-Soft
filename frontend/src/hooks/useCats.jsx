import { useContext } from "react";
import CatsContext from "../context/CatsProvider";

const useCats = () => {
  return useContext(CatsContext);
};

export default useCats;

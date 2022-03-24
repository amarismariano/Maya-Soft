import { useState } from "react";
import useCats from "../hooks/useCats";
import useBreeds from "../hooks/useBreeds";
import Cat from "./Cat";
import { Row } from "react-bootstrap";
import CatBreed from "./CatBreed";

const CatsList = () => {
  const [active, setActive] = useState(false);

  const { cats } = useCats();
  const { breedsId } = useBreeds();

  return (
    <Row className="mt-5">
      {cats.map((cat) => (
        <Cat cats={cat} key={cat.id} />
      ))}
    </Row>
  );
};

export default CatsList;

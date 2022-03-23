import React from "react";
import useCats from "../hooks/useCats";
import Cat from "./Cat";
import { Row } from "react-bootstrap";

const CatsList = () => {
  const { cats } = useCats();

  return (
    <Row className="mt-5">
      {cats.map((cat) => (
        <Cat cats={cat} key={cat.id} />
      ))}
    </Row>
  );
};

export default CatsList;

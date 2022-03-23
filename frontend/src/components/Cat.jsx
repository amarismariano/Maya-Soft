import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const Cat = ({ cats }) => {
  console.log(cats);
  return (
    <Col md={6} lg={4}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={cats?.image?.url}
          alt={`Imagen de ${cats.name}`}
        />

        <Card.Body>
          <Card.Title>{cats.name}</Card.Title>
          <Card.Text>{cats.description}</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link href={cats.wikipedia_url}>Wikipedia</Card.Link>
          <Card.Link href={cats.cfa_url}>CFA</Card.Link>
          <Card.Link href={cats.vetstreet_url}>Vet Street</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cat;

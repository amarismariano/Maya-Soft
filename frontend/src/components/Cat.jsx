import React from "react";
import { Col, Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import useCats from "../hooks/useCats";

const Cat = ({ cats }) => {
  const { handleModalClick } = useCats();

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
          <Card.Text>
            <strong>Origin: </strong>
            {cats.origin}
          </Card.Text>
          <Card.Text>
            <strong>Life Expectancy:</strong> {`${cats.life_span} Years`}
          </Card.Text>
          <Card.Text>
            <i>
              <strong>Moods:</strong> {cats.temperament}
            </i>{" "}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{`Adaptability level ${cats.adaptability}`}</ListGroupItem>
          <ListGroupItem>{`Affection level ${cats.affection_level}`}</ListGroupItem>
          <ListGroupItem>{`Child Friendly level ${cats.child_friendly}`}</ListGroupItem>
        </ListGroup>
        <Button
          onClick={() => {
            handleModalClick();
          }}
          className="w-100 text-uppercase"
          variant="secondary"
        >
          See More!
        </Button>
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

import React from "react";
import ReactStars from "react-stars";
import { Col, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import useCats from "../hooks/useCats";

const Cat = ({ cat }) => {
  const { setCats, cats } = useCats();

  //This let us delete a cat from the App
  const remove = (name) => {
    setCats(cats.filter((cat) => cat.name !== name));
  };

  return (
    <Col md={6} lg={4}>
      <Card border="dark" className="mb-4">
        <Card.Img
          variant="top"
          src={cat?.image?.url}
          alt={`Imagen de ${cat.name}`}
          width={300}
          height={300}
        />

        <Card.Body>
          <Card.Title>{cat.name}</Card.Title>
          <Card.Text>{cat.description}</Card.Text>
          <Card.Text>
            <strong>Origin: </strong>
            {cat.origin}
          </Card.Text>
          <Card.Text>
            <strong>Life Span:</strong> {`${cat.life_span} Years`}
          </Card.Text>
          <Card.Text>
            <i>
              <strong>Moods:</strong> {cat.temperament}
            </i>{" "}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <i>Adaptability</i>
            <ReactStars
              count={5}
              value={cat.adaptability}
              size={24}
              edit={false}
            />
          </ListGroupItem>
          <ListGroupItem>
            <i>Affection</i>
            <ReactStars
              count={5}
              value={cat.affection_level}
              size={24}
              edit={false}
            />
          </ListGroupItem>
          <ListGroupItem>
            <i>Child Friendly</i>
            <ReactStars
              count={5}
              value={cat.child_friendly}
              size={24}
              edit={false}
            />
          </ListGroupItem>
          <Button
            variant={"danger"}
            onClick={() => remove(cat.name)}
            className="w-100 text-uppercase mt-2"
          >
            Delete
          </Button>
        </ListGroup>
        <Card.Body className="text-center">
          <Card.Text>Links</Card.Text>
          <Card.Link
            style={{ textDecoration: "none" }}
            href={cat.wikipedia_url}
          >
            Wikipedia
          </Card.Link>
          <Card.Link style={{ textDecoration: "none" }} href={cat.cfa_url}>
            CFA
          </Card.Link>
          <Card.Link
            style={{ textDecoration: "none" }}
            href={cat.vetstreet_url}
          >
            Vet Street
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cat;

import React from "react";
import ReactStars from "react-stars";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Cat = ({ cats }) => {
  return (
    <Col md={6} lg={4}>
      <Card border="dark" className="mb-4">
        <Card.Img
          variant="top"
          src={cats?.image?.url}
          alt={`Imagen de ${cats.name}`}
          width={300}
          height={300}
        />

        <Card.Body>
          <Card.Title>{cats.name}</Card.Title>
          <Card.Text>{cats.description}</Card.Text>
          <Card.Text>
            <strong>Origin: </strong>
            {cats.origin}
          </Card.Text>
          <Card.Text>
            <strong>Life Span:</strong> {`${cats.life_span} Years`}
          </Card.Text>
          <Card.Text>
            <i>
              <strong>Moods:</strong> {cats.temperament}
            </i>{" "}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <i>Adaptability</i>
            <ReactStars
              count={5}
              value={cats.adaptability}
              size={24}
              edit={false}
            />
          </ListGroupItem>
          <ListGroupItem>
            <i>Affection</i>
            <ReactStars
              count={5}
              value={cats.affection_level}
              size={24}
              edit={false}
            />
          </ListGroupItem>
          <ListGroupItem>
            <i>Child Friendly</i>
            <ReactStars
              count={5}
              value={cats.child_friendly}
              size={24}
              edit={false}
            />
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="text-center">
          <Card.Text>Links</Card.Text>
          <Card.Link
            style={{ textDecoration: "none" }}
            href={cats.wikipedia_url}
          >
            Wikipedia
          </Card.Link>
          <Card.Link style={{ textDecoration: "none" }} href={cats.cfa_url}>
            CFA
          </Card.Link>
          <Card.Link
            style={{ textDecoration: "none" }}
            href={cats.vetstreet_url}
          >
            Vet Street
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cat;

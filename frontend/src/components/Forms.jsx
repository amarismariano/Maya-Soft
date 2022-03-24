import { useEffect, useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCats from "../hooks/useCats";

const Forms = () => {
  const [search, setSearch] = useState({
    categoria: "",
  });
  const [alert, setAlert] = useState("");

  // We take the states and variables from the Cats Context
  const { breeds, cats, setCats, allCats } = useCats();

  //This basically let us validate our search, then do the search and get a Cat by his ID
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }

    setAlert("");
    if (cats.length === 1 || cats.length === 0) {
      setCats(allCats.filter((cat) => cat.id === search.categoria));
    } else {
      setCats(cats.filter((cat) => cat.id === search.categoria));
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Cat</Form.Label>

            <Form.Select
              id="name"
              name="name"
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>-- Select -- </option>
              {breeds.map((breed) => (
                <option key={breed.name} value={breed.name}>
                  {breed.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Breed</Form.Label>

            <Form.Select
              id="categoria"
              name="categoria"
              value={search.categoria}
              onChange={(e) => {
                let cat = breeds.filter((cat) => cat.id === e.target.value);
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                  ["name"]: cat[0].name,
                });
              }}
            >
              <option>-- Select -- </option>
              {breeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.id}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
            type="submit"
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Forms;

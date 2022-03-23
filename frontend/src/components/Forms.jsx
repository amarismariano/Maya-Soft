import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCats from "../hooks/useCats";

const Forms = () => {
  const [busqueda, setBusqueda] = useState({
    categoria: "",
  });

  const [alert, setAlert] = useState("");

  const { breeds } = useCats();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }

    setAlert("");
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

            <Form.Control
              id="nombre"
              type="text"
              name="nombre"
              placeholder="Ex: American"
              value={busqueda.nombre}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Breed</Form.Label>

            <Form.Select
              id="categoria"
              name="categoria"
              value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
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
      </Row>

      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
            type="submit"
          >
            Buscar Gato
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Forms;

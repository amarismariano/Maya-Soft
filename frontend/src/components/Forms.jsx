import { useEffect, useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCats from "../hooks/useCats";
import useBreeds from "../hooks/useBreeds";

const Forms = () => {
  const [busqueda, setBusqueda] = useState({
    categoria: "",
  });
  const [alert, setAlert] = useState("");

  const { breeds, modal, handleModalClick } = useCats();
  const { getCatIds, breedsId } = useBreeds();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }

    setAlert("");
    getCatIds(busqueda);
    {
      console.log(breedsId);
    }
  };

  useEffect(() => {
    getCatIds(busqueda);
  }, [busqueda]);

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

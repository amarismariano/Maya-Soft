import { Button, Form, Row, Col } from "react-bootstrap";
import useCats from "../hooks/useCats";

const Forms = () => {
  const { breeds, names } = useCats();

  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre del gato</Form.Label>

            <Form.Select id="nombre" name="nombre">
              <option>-- Select -- </option>
              {names.map((cat) => (
                <option key={cat.name}>{cat.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Raza del gato</Form.Label>

            <Form.Select id="categoria" name="categoria">
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
    </Form>
  );
};

export default Forms;

import { Button, Form, Row, Col } from "react-bootstrap";

const Forms = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre del gato</Form.Label>

            <Form.Select id="nombre" name="nombre">
              <option>-- Select -- </option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Raza del gato</Form.Label>

            <Form.Select id="categoria" name="categoria">
              <option>-- Select -- </option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Forms;

import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCats from "../hooks/useCats";

const Forms = () => {
  //States
  const [catName, setCatName] = useState("");
  const [search, setSearch] = useState({
    categoria: "",
  });
  const [alert, setAlert] = useState("");
  const [isNameFilterActive, setIsNameFilterActive] = useState(true);
  const isIdFilterActive = catName.length > 0;

  // We take the states and variables from the Cats Context
  const { breeds, cats, setCats, allCats, setOrder } = useCats();

  // Filter Cats By Name
  const handleChangeCatName = (e) => {
    const currentValue = e.target.value;

    // Validation - not allowing numbers or special chars
    if (!/^[a-zA-Z]+$/.test(currentValue) && currentValue !== "") return;

    //After this we set the state
    setCatName(currentValue);
    setAlert("");

    // Validations
    if (currentValue === "") return setCats(allCats);

    //We filter the cats
    const filteredCat = allCats.filter((cat) =>
      cat.name.toLowerCase().includes(currentValue.toLowerCase())
    );
    setCats(filteredCat);
  };

  //This basically let us validate our search, then do the search and get a Cat by his ID/Breed
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validation
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }

    //IF there is no error in our search, we set the alert to a empty string
    setAlert("");
    setIsNameFilterActive(false);

    //Filter Cats By ID
    if (cats.length === 1 || cats.length === 0) {
      setCats(allCats.filter((cat) => cat.id === search.categoria));
    } else {
      setCats(cats.filter((cat) => cat.id === search.categoria));
    }
  };

  // To Reset the cats after the query
  const handleReset = () => {
    setCats(allCats);
    setIsNameFilterActive(true);
    setSearch({ categoria: "" });
    setAlert("");
  };

  return (
    <Form>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Label htmlFor="inputPassword5">Name</Form.Label>
          <Form.Group className="mb-3">
            <Form.Control
              disabled={!isNameFilterActive}
              type="text"
              placeholder="Search By Name"
              value={catName}
              onChange={handleChangeCatName}
              id="nombre"
              name="nombre"
            />
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
        <Col md={3}>
          <Form.Label htmlFor="order">Order</Form.Label>
          <Form.Select
            id="Order"
            name="order"
            onChange={(e) => setOrder(e.target.value)}
          >
            <option selected value="az">
              A-Z
            </option>
            <option value="za">Z-A</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            disabled={isIdFilterActive}
            onClick={handleSubmit}
            variant="primary"
            className="text-uppercase w-100"
          >
            Search
          </Button>
        </Col>
        <Col md={3}>
          <Button
            disabled={isIdFilterActive}
            variant="primary"
            className="text-uppercase w-100"
            onClick={handleReset}
          >
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Forms;

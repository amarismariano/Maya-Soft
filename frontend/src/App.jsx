import { Container } from "react-bootstrap";
import Forms from "./components/Forms";

function App() {
  return (
    <>
      <header className="py-5">
        <h1>The Cat App</h1>
      </header>

      <Container className="mt-5">
        <Forms />
      </Container>
    </>
  );
}

export default App;

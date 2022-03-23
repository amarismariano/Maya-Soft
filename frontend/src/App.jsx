import { Container } from "react-bootstrap";
import Forms from "./components/Forms";
import CatsList from "./components/CatsList";
import { CatsProvider } from "./context/CatsProvider";

function App() {
  return (
    <CatsProvider>
      <header className="py-5">
        <h1>The Cat App</h1>
      </header>

      <Container className="mt-5">
        <Forms />

        <CatsList />
      </Container>
    </CatsProvider>
  );
}

export default App;

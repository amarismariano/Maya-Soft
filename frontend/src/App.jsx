import { Container } from "react-bootstrap";
import Forms from "./components/Forms";
import CatsList from "./components/CatsList";
import { CatsProvider } from "./context/CatsProvider";
import { BreedsProvider } from "./context/BreedsProvider";

function App() {
  return (
    <CatsProvider>
      <BreedsProvider>
        <header className="py-5">
          <h1>The Cat App</h1>
        </header>

        <Container className="mt-5">
          <Forms />

          <CatsList />
        </Container>
      </BreedsProvider>
    </CatsProvider>
  );
}

export default App;

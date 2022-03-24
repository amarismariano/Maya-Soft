import { Container, Modal } from "react-bootstrap";
import Forms from "./components/Forms";
import CatsList from "./components/CatsList";
import ModalCat from "./components/ModalCat";
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

          <ModalCat />
        </Container>
      </BreedsProvider>
    </CatsProvider>
  );
}

export default App;

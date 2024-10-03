import "./App.css";
import { Container } from "./Components/index";
import { Header, Hero, Footer, MostPopualr, GamingLaibrary } from "./Sections";
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <MostPopualr />
        <GamingLaibrary />
      </Container>
      <Footer />
    </>
  );
};

export default App;

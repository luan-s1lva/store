import "./App.css";
import Background from "./components/Background";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <Background>
        <SearchBar />
        <Carousel />
        <Footer />
      </Background>
    </>
  );
}

export default App;

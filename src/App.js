import './App.css';
import Background from './components/Background';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Background>
        <SearchBar />
        <Footer />
      </Background>
    </>
  );
}

export default App;

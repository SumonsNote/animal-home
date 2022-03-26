import './App.css';
import AnimalShop from './components/Animal-shop/AnimalShop';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AnimalShop></AnimalShop>
      <Questions></Questions>
    </div>
  );
}

export default App;

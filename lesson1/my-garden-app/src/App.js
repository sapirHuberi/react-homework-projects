import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';

function App() {
  const flowersList = [
    { id: 101, name: "רקפת", petalColor: "pink", leafColor: "darkgreen" },
    { id: 102, name: "צבעוני", petalColor: "red", leafColor: "green" },
    { id: 103, name: "חמנייה", petalColor: "yellow", leafColor: "brown" },
    { id: 104, name: "איריס", petalColor: "purple", leafColor: "green" },
    { id: 105, name: "סיגלון", petalColor: "blue" },
    { id: 106, name: "דייזי", leafColor: "darkgreen" },
  ];
  return (
<div className="App">
      <Header />  
   <div className="garden-container">
        {flowersList.map((flower) => (
          <Flower 
            key={flower.id} 
            name={flower.name}
            petalColor={flower.petalColor}
            leafColor={flower.leafColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

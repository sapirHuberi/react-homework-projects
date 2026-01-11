import logo from './logo.svg';
import './App.css';
import ChooseLanguage from './components/ChooseLanguage';
import BirthDate from './components/BirthDate';
import GreetingsList from './components/GreetingsList';

function App() {
  const myBirthDate = new Date(2015, 10, 20); // 20 לנובמבר 2015
  const myGreetings = [
    "עד 120 כעשרים!",
    "המון אושר ובריאות",
    "שתזכה להגשים את כל החלומות"
  ];
  return (
    <div className="App">
      <h1>אפליקציית יום הולדת</h1>

      {/* 2. הוספת הקומפוננטה למסך */}
      <ChooseLanguage />

      <hr />
      {/* כאן נוסיף בהמשך את שאר הקומפוננטות */}
      <BirthDate dateOfBirth={myBirthDate} />
      <hr />
      <GreetingsList greetings={myGreetings} />
    </div>
  );
}

export default App;

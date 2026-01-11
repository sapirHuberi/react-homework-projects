import myFlowerImage from './flowers.png'; 
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <h1>הגינה שלי</h1> 
      <img src={myFlowerImage} alt="flower" style={{width: '700px'}} /> 
    </header>
  );
}
export default Header;
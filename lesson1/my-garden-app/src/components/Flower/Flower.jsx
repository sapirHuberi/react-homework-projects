function Flower(props) {
  const flowerName = props.name;
  const petalColor =  props.petalColor || "lavender";
  const leafColor = props.leafColor || "lightgreen"; 

  const handleFlowerClick = () => {
    alert(`אני פרח מסוג ${props.name || flowerName}`);
  }



  const flowerStyle = {
    backgroundColor: petalColor, 
    color: leafColor,          
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: `2px solid ${leafColor}`,
    display: 'inline-block',
    textAlign: 'center'
  };

  return (
    <div style={flowerStyle} onClick={handleFlowerClick}>
      <h2>{flowerName}</h2>
      <p>צבע עלי כותרת: {petalColor}</p>
      <p>צבע עלה מרכזי: {leafColor}</p>
    </div>
  );
}

export default Flower;
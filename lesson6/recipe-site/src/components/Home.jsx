import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>ברוכים הבאים לאתר המתכונים שלי</h1>
      <p>כאן תוכלו למצוא מגוון מתכונים מעולים מכל העולם.</p>
      <br />
      <Link to="/login">
        <button style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}>
          להתחברות והרשמה
        </button>
      </Link>
    </div>
  );
}

export default Home;
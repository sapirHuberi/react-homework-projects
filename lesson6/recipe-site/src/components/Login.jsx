import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState(""); 
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault(); 
    const hasDigits = /\d/.test(userName);
    const isValid = userName.length >= 2 && !hasDigits;

    if (!isValid) {
      alert("שם לא תקין! חוזר לדף הבית.");
      navigate('/');
    } else {
      navigate('/recipes', { state: { user: userName } });
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>התחברות לאתר המתכונים</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="הקש שם משתמש" 
          value={userName}
          onChange={(e) => setUserName(e.target.value)} 
          required 
        />
        <br /><br />
        <button type="submit">היכנס</button>
      </form>
    </div>
  );
}

export default Login;
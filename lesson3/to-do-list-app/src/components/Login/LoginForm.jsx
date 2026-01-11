import React ,{ useState } from 'react';
function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedUsername = username.trim();
        if (trimmedUsername === '') {
            alert('Username cannot be empty, please enter a username.');
            return;
        }
        onLogin(trimmedUsername);
    };
        return(
            <div className='login-container'>
                <h2>Please Log In</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button type="submit">Log In</button>
                </form>
            </div>

        );
    }
export default LoginForm;


import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('admin@blog.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || '/dashboard';

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    navigate(redirectPath, { replace: true });
  };

  if (isAuthenticated) {
    navigate('/dashboard');
  }

  return (
    <section className="auth-layout">
      <form className="card form-card auth-card" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Use any email and password to simulate authentication.</p>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        {error ? <p className="error-text">{error}</p> : null}

        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </section>
  );
}

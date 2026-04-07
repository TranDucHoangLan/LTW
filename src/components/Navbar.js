import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand">
          SimpleBlog
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          {isAuthenticated ? <NavLink to="/dashboard">Dashboard</NavLink> : <NavLink to="/login">Login</NavLink>}
        </nav>

        <div className="nav-user">
          {isAuthenticated ? (
            <>
              <span className="welcome">Hi, {user.name}</span>
              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <span className="welcome">Guest mode</span>
          )}
        </div>
      </div>
    </header>
  );
}

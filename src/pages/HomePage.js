import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="hero card">
      <p className="eyebrow">React Blog Demo</p>
      <h1>Simple blog example with authentication and protected routes</h1>
      <p>
        This sample project turns a basic blog into a runnable React app. Visitors can browse posts,
        while authenticated users can open the dashboard and create new posts.
      </p>
      <div className="hero-actions">
        <Link to="/posts" className="btn btn-primary">
          View Posts
        </Link>
        <Link to="/login" className="btn btn-secondary">
          Login
        </Link>
      </div>
    </section>
  );
}

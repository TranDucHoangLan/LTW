import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <article className="card post-card">
      <div className="post-meta">
        <span>{post.tag}</span>
        <span>{post.date}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="post-footer">
        <small>By {post.author}</small>
        <Link to={`/posts/${post.id}`} className="btn btn-link">
          Read more
        </Link>
      </div>
    </article>
  );
}

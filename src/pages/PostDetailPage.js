import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { initialPosts } from '../data/posts';

export default function PostDetailPage() {
  const { id } = useParams();
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('simple-blog-posts'));
    if (savedPosts?.length) {
      setPosts(savedPosts);
    }
  }, []);

  const post = useMemo(() => posts.find((item) => String(item.id) === id), [posts, id]);

  if (!post) {
    return (
      <section className="card">
        <h1>Post not found</h1>
        <Link to="/posts" className="btn btn-primary">
          Back to Posts
        </Link>
      </section>
    );
  }

  return (
    <article className="card detail-card">
      <div className="post-meta">
        <span>{post.tag}</span>
        <span>{post.date}</span>
      </div>
      <h1>{post.title}</h1>
      <p className="detail-author">By {post.author}</p>
      <p>{post.content}</p>
      <Link to="/posts" className="btn btn-secondary">
        Back to Posts
      </Link>
    </article>
  );
}

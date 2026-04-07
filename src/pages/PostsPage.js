import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { initialPosts } from '../data/posts';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('simple-blog-posts'));
    setPosts(savedPosts?.length ? savedPosts : initialPosts);
  }, []);

  return (
    <section>
      <div className="section-heading">
        <h1>All Blog Posts</h1>
        <p>Browse the sample posts below.</p>
      </div>

      <div className="post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

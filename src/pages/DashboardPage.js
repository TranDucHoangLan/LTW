import { useEffect, useState } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { initialPosts } from '../data/posts';
import { useAuth } from '../context/AuthContext';

export default function DashboardPage() {
  const [posts, setPosts] = useState(initialPosts);
  const { user } = useAuth();

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('simple-blog-posts'));
    if (savedPosts?.length) {
      setPosts(savedPosts);
    } else {
      localStorage.setItem('simple-blog-posts', JSON.stringify(initialPosts));
    }
  }, []);

  const handleAddPost = (newPost) => {
    const post = {
      id: Date.now(),
      author: user?.name || 'admin',
      date: new Date().toISOString().slice(0, 10),
      ...newPost,
    };

    const updatedPosts = [post, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('simple-blog-posts', JSON.stringify(updatedPosts));
  };

  return (
    <section>
      <div className="section-heading">
        <h1>Dashboard</h1>
        <p>This page is protected. Only logged-in users can create posts.</p>
      </div>

      <div className="dashboard-layout">
        <PostForm onAddPost={handleAddPost} />

        <div>
          <h2>Published Posts</h2>
          <div className="post-grid single-column">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

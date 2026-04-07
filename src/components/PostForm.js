import { useState } from 'react';

const emptyForm = {
  title: '',
  excerpt: '',
  content: '',
  tag: '',
};

export default function PostForm({ onAddPost }) {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.excerpt || !form.content || !form.tag) {
      alert('Please complete all fields.');
      return;
    }

    onAddPost(form);
    setForm(emptyForm);
  };

  return (
    <form className="card form-card" onSubmit={handleSubmit}>
      <h2>Create a New Post</h2>

      <label htmlFor="title">Title</label>
      <input id="title" name="title" value={form.title} onChange={handleChange} />

      <label htmlFor="excerpt">Excerpt</label>
      <input id="excerpt" name="excerpt" value={form.excerpt} onChange={handleChange} />

      <label htmlFor="tag">Tag</label>
      <input id="tag" name="tag" value={form.tag} onChange={handleChange} />

      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" rows="6" value={form.content} onChange={handleChange} />

      <button type="submit" className="btn btn-primary">
        Publish Post
      </button>
    </form>
  );
}

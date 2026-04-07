export const initialPosts = [
  {
    id: 1,
    title: 'Why I Built This Simple Blog',
    author: 'admin',
    excerpt: 'A tiny React blog project with routing, protected pages, and a clean UI.',
    content:
      'This project demonstrates a simple blog built with React and react-router-dom. It includes public pages for reading posts and a protected dashboard page for adding new posts after login.',
    tag: 'React',
    date: '2026-04-07',
  },
  {
    id: 2,
    title: 'Protected Routes Made Easy',
    author: 'admin',
    excerpt: 'Use a small auth context and a reusable ProtectedRoute component.',
    content:
      'Authentication in this sample is mocked with localStorage so the app stays easy to run inside CodeSandbox or locally. You can log in with any email and password to access the dashboard.',
    tag: 'Auth',
    date: '2026-04-06',
  },
  {
    id: 3,
    title: 'How the Components Are Organized',
    author: 'admin',
    excerpt: 'The code is separated into pages, components, context, and data files.',
    content:
      'Splitting components into different files makes the code easier to read, maintain, and expand. This version separates the navigation bar, protected route wrapper, post cards, and pages clearly.',
    tag: 'Structure',
    date: '2026-04-05',
  },
];

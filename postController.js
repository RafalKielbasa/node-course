const posts = [
  {
    id: 1,
    title: 'Getting Started with Node.js',
    content: 'Node.js is a powerful runtime environment...',
    author: 'John Doe',
    createdAt: '2023-01-15',
    tags: ['nodejs', 'javascript', 'backend'],
  },
  {
    id: 2,
    title: 'JavaScript ES6 Features',
    content: 'Modern JavaScript brings many useful features...',
    author: 'Jane Smith',
    createdAt: '2023-02-20',
    tags: ['javascript', 'es6', 'programming'],
  },
  {
    id: 3,
    title: 'REST API Best Practices',
    content: 'When designing RESTful APIs, consider...',
    author: 'Mike Johnson',
    createdAt: '2023-03-10',
    tags: ['api', 'rest', 'backend'],
  },
  {
    id: 4,
    title: 'MongoDB Fundamentals',
    content: 'MongoDB is a popular NoSQL database...',
    author: 'Sarah Wilson',
    createdAt: '2023-04-05',
    tags: ['mongodb', 'database', 'nosql'],
  },
  {
    id: 5,
    title: 'Express.js Middleware',
    content: 'Middleware functions are essential in Express...',
    author: 'Tom Brown',
    createdAt: '2023-05-01',
    tags: ['express', 'nodejs', 'middleware'],
  },
]

const getPosts = () => posts

export const getPostsLength = () => posts.length

export default getPosts

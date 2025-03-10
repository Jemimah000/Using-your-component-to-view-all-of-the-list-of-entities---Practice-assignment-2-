import PostCard from "./components/postcard";

const posts = [
  {
    id: 1,
    username: "john_doe",
    profilePic: "https://via.placeholder.com/50",
    content: "Hello world! This is my first post.",
  },
  {
    id: 2,
    username: "jane_smith",
    profilePic: "https://via.placeholder.com/50",
    content: "Just had a great day at the park!",
  },
];

const App = () => {
  return (
    <div className="p-6 space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;
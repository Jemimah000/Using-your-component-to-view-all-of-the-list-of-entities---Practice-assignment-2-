import LikeButton from "./likebutton";

const postCard = ({ post }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md flex items-center space-x-4">
      <img
        src={post.profilePic}
        alt={post.username}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <h2 className="font-bold">{post.username}</h2>
        <p>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

export default postCard;
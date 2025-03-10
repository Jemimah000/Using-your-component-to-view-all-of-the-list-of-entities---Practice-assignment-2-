import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`px-3 py-1 rounded-lg transition-colors ${
        liked ? "bg-red-500 text-white" : "bg-gray-300 text-black"
      }`}
    >
      {liked ? " Liked" : " Like"}
    </button>
  );
};

export default LikeButton;
import { useState } from "react";

export default function LikeButton() {
  let [isLike, setIsLike] = useState(false);
  let [Clicks, setClicks] = useState(0);

  let toggle = () => {
    setIsLike(!isLike);
    setClicks(Clicks + 1);
  };

  let LikeStyle = { color: "red" };

  return (
    <div>
      <p>Clicks={Clicks}</p>
      <p onClick={toggle}>
        {isLike ? (
          <i className="fa-regular fa-heart"></i>
        ) : (
          <i className="fa-solid fa-heart" style={LikeStyle}></i>
        )}
      </p>
    </div>
  );
}

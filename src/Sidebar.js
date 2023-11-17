import { useState } from "react";
import Friend from "./Friend";
import AddFriend from "./AddFriend";

export default function Sidebar({ friends, handleSelect, handleAddFriend }) {
  const [clicked, setClicked] = useState(false);

  function handleToggle() {
    setClicked(!clicked);
  }
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} {...friend} handleSelect={handleSelect} />
        ))}
      </ul>
      {clicked && (
        <AddFriend
          handleAddFriend={handleAddFriend}
          handleToggle={handleToggle}
        />
      )}
      <button className="button" onClick={handleToggle}>
        {clicked ? "close" : "Add Friend"}
      </button>
    </div>
  );
}

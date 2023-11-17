import { useState } from "react";
import Form from "./Form";
import Sidebar from "./Sidebar";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends.slice());
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(newFriend) {
    setFriends(() => [...friends, newFriend]);
  }

  function updateFriend(curFriend, id) {
    setFriends(() =>
      friends.map((friend) => (friend.id === id ? curFriend : friend))
    );
    setSelectedFriend(null);
  }

  function handleSelect(id) {
    id === selectedFriend ? setSelectedFriend(null) : setSelectedFriend(id);
  }

  return (
    <div className="app">
      <Sidebar
        friends={friends}
        handleAddFriend={handleAddFriend}
        handleSelect={handleSelect}
      />
      {selectedFriend && (
        <Form
          id={selectedFriend}
          friends={friends}
          updateFriend={updateFriend}
        />
      )}
    </div>
  );
}

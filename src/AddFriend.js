import { useState } from "react";

export default function AddFriend({ handleAddFriend, handleToggle }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (url === "https://i.pravatar.cc/48") setUrl(url + "?" + id);
    const newFriend = { id, name, image: url, balance: 0 };
    handleAddFriend(newFriend);
    setName("");
    setUrl("");
    handleToggle();
  }
  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📷 image URL</label>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button className="button">Add</button>
    </form>
  );
}

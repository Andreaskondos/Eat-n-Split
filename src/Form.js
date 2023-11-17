import { useState } from "react";

export default function Form({ id, friends, updateFriend }) {
  const [curFriend] = friends.filter((friend) => friend.id === id);
  const [bill, setBill] = useState("");
  const [myCost, setMyCost] = useState("");
  const [friendCost, setFriendCost] = useState("");
  const [iPaid, setIPaid] = useState(true);

  function handleBalance(e) {
    e.preventDefault();
    console.log(iPaid);
    if (iPaid) curFriend.balance = curFriend.balance + friendCost;
    else curFriend.balance = curFriend.balance - myCost;
    updateFriend(curFriend, id);
  }

  function handleCost(num) {
    if (!bill || num > bill) return;
    setMyCost(num);
    setFriendCost(bill - num);
  }

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {curFriend.name}</h2>
      <label>💰 Bill value </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🕴️ Your expense </label>
      <input
        type="text"
        value={myCost}
        onChange={(e) => handleCost(e.target.value * 1)}
      />
      <label>🧑‍🤝‍🧑 {curFriend.name}'s expense </label>
      <input type="text" value={friendCost} disabled />
      <label>🤑 Who is playing the bill? </label>
      <select
        onChange={(e) => setIPaid(e.target.value === "me" ? true : false)}
      >
        <option value="me">You</option>
        <option value="not me">{curFriend.name}</option>
      </select>
      <button className="button" onClick={(e) => handleBalance(e)}>
        Split bill
      </button>
    </form>
  );
}

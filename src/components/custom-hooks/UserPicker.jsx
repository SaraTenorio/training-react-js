import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function UserPicker() {
  const [user, setUser] = useLocalStorage("user", "Joao");

  return (
    <select value={user} onChange={e => setUser(e.target.value)}>
      <option>Joao</option>
      <option>Jose</option>
      <option>Manuel</option>
      <option>Maria</option>
    </select>
  );
}
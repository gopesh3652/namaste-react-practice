import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>count: {count}</h1>
      <h1>count: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Place: Jaipur</h3>
      <h4>Contact: @gopesh3652</h4>
    </div>
  );
};

export default User;

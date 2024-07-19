import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);
  // return <h1>{users.length > 0 &&  users[0].name}</h1>; short than terinary
  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>{users[0]?.name}</h1>
    </div>
  );
}

export default Home;

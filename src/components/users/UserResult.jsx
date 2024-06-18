import React, { useEffect, useState } from "react";

function UserResult() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const response = await fetch("https://api.github.com/users", {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json(); //제이슨 변환

    setUsers(data); //users 출력
  };
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <h3>{user.login}</h3>
      ))}
    </div>
  );
}

export default UserResult;

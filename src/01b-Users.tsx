import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

export const Users = () => {
  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    fetch('http://localhost/users')
      .then((x) => x.json())
      .then((x) => setUsers(x));
  });

  const handleDelete = (user: User) => {
    fetch(`http://localhost/users/${user.id}`, { method: 'DELETE' }).then(() => {
      // Get new user list after delete
      fetch('http://localhost/users')
        .then((x) => x.json())
        .then((x) => setUsers(x));
    });
  };

  return (
    <section>
      <h1>Users</h1>
      <div>
        {users.map((x) => (
          <div>
            <span>{x.name}</span>
            <button onClick={() => handleDelete(x)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

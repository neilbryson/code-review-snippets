import { useEffect, useState } from 'react';

export const Users = () => {
  // [{ id: number, name: string }]
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost/users')
      .then((x) => x.json())
      .then((x) => setUsers(x));
  });

  const handleDelete = (user) => {
    fetch(`http://localhost/users/${user.id}`, { method: 'DELETE' })
      .then(() => {
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

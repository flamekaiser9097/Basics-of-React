import React, { useState } from 'react';
type User = {
id: number; name: string; email: string;
};
export const UserList: React.FC = () => {
  const [user, setUser] = useState<User[]>([]);
  const addUser = () => {
    const newUser = {
      id: user.length + 1, name: `User ${user.length + 1}`, email: `user${user.length + 1}@example.com`,
    };
    setUser(user.concat(newUser));
  };
  return (
    <div>
      <button onClick={addUser}>Add User</button>
      <ul>
        {user.map((users) => ( <li key={users.id}>{`${users.name} - ${users.email}`}</li> ))}
      </ul>
    </div>
  );
};

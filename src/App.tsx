import React, { useState, useEffect } from 'react';
import { UserList } from './components/UserList';
import { Product } from './components/Product';
import { FilteredUsers } from './components/FilteredUsers';
import './App.css'
type User = {
  id: number;
  name: string;
  email: string;
};
const App: React.FC = () => {
  const [user, setUser] = useState<User[]>([
    { id: 1, name: 'Akash', email: 'Akash11@example.com' },{ id: 2, name: 'Bablu', email: 'Bablu12@example.com' },
    { id: 3, name: 'Chotu', email: 'Chotu13@example.com' },{ id: 4, name: 'Das', email: 'Das14@example.com' },
    { id: 5, name: 'Elvish', email: 'Elvish15@example.com'},{ id: 6, name: 'Firoz', email: 'Firoz16@example.com' },
    { id: 7, name: 'Ganga', email: 'Ganga17@example.com' },{ id: 8, name: 'Harshit', email: 'Harshit18@example.com' },
    { id: 9, name: 'Indra', email: 'Indra19@example.com' },{ id: 10, name: 'Jabal', email: 'Jabal20@example.com' }
  ]);
  useEffect(() => {
    const newUser = { id: user.length + 1, name: 'Komal', email: 'Komal21@example.com' };
    setUser(user => [...user, newUser]);
  },[]);
  return (
    <div className='container'>
      <UserList /> <Product /> <FilteredUsers user={user} />
    </div>
  );
};
export default App;

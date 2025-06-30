import React, { useEffect, useState, useMemo, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100&nat=us')
      .then((res) => res.json())
      .then((data) => {
        const mappedUsers = data.results.map((user, index) => ({
          id: index + 1,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          address: {
            city: user.location.city,
          },
          picture: user.picture.thumbnail,
        }));

        setUsers(mappedUsers);
        setLoading(false);
      });
  }, []);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleClear = useCallback(() => {
    setSearchTerm('');
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, users]);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div className="App">
      <h1>Naudotojų paieška</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;

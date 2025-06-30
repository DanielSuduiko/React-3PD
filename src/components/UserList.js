import React from 'react';
import UserCard from './UserCard';
import './UserList.css';

const UserList = React.memo(({ users }) => {
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
});

export default UserList;

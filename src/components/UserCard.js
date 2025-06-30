import React from 'react';
import './UserCard.css';

const UserCard = React.memo(({ user }) => {
  return (
    <div className="user-card">
      <img src={user.picture} alt={user.name} />
      <div>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>City: {user.address.city}</p>
      </div>
    </div>
  );
});

export default UserCard;

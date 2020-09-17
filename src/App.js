import React from 'react';
import Profile from './components/Profile/Profile.jsx';
import user from './Data/user.json';
import Statistics from './components/Statistics/Statistics.jsx';
import statisticalData from './Data/statistical-data.json';
import FriendList from './components/FriendList/FriendList.jsx';
import friendsData from './Data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import transactions from './Data/transactions.json';
export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
}

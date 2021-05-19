import React from 'react';
import Profile from "./components/Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./TransactionsHistory/TransactionHistory";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

const App = () => {
    return (
        <div>
            <Profile
              name={user.name}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              followers={user.stats.followers}
              views={user.stats.views}
              likes={user.stats.likes}
              />
            <Statistics 
              title="Upload stats" 
              stats={statisticalData} 
            />
            <FriendList 
              friends={friends} 
            />
            <TransactionHistory 
              items={transactions} 
              />;

        </div>
    );
};

export default App;
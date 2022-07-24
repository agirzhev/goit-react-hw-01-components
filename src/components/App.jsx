import Profile from './Profile/index';
import userInfo from '../patch/to/user.json';
import Statistics from './Statistics/index';
import userStatistics from '../patch/to/data.json';
import FrendList from './FriendList/index';
import frends from '../patch/to/friends.json';
import TransactionHistory from './TransactionHistory/index'
import transactions from '../patch/to/transactions.json';


const App = () => {
  return (
    <div className="App"
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    ><Profile
      username={userInfo.username}
      tag={userInfo.tag}
      location={userInfo.location}
      avatar={userInfo.avatar}
      stats={userInfo.stats} />
    <Statistics userStatistic={userStatistics} />
    <FrendList frends={frends} /> 
    <TransactionHistory items={transactions} />  
    </div>
  );
};

export default App;
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import userInfo from './user.json';
import statisticalData from './statistical-data.json';

function App() {
  return (
    <div>
      <Profile
        name={userInfo.name}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <Statistics stats={statisticalData} />
    </div>
  );
}

export default App;

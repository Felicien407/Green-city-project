// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

import Aside from './components/aside';
import Date from './components/Date';
import Insights from './components/Insights';
import Profile from './components/Profile';
import RecentOrders from './components/RecentOrders';
import RecentUpdates from './components/RecentUpdates';
import SalesAnalytics from './components/SalesAnalytics';
import AddProduct from './components/Add';

const App = () => {
  return (
    <div className="container">
      <Aside />
      <main>
        <h1>Dashboard</h1>
        <Date />
        <Insights />
        <RecentOrders />
      </main>

      <div className="right">
        <Profile />
        <RecentUpdates />
        <SalesAnalytics />
        <AddProduct />
      </div>
    </div>

  );
};

export default App;
// import '../App.css';
import Aside from '../components/dash-components/aside';
import Date from '../components/dash-components/Date';
import Insights from '../components/dash-components/Insights';
import Profile from '../components/dash-components/Profile';
import RecentOrders from '../components/dash-components/RecentOrders';
import RecentUpdates from '../components/dash-components/RecentUpdates';
import SalesAnalytics from '../components/dash-components/SalesAnalytics';
import AddProduct from '../components/dash-components/Add';

const Dashboard = () => {
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
}

export default Dashboard;
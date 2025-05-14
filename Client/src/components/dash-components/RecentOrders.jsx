const RecentOrders = () => {
    return (
        <>
            <div className="recent_order">
                <h2>Recent Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payments</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mango tree seeds</td>
                            <td>4563</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Tomato seeds</td>
                            <td>4563</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Avocado seeds</td>
                            <td>4563</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Orange tree seeds</td>
                            <td>4563</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                    </tbody>
                </table>
                <a href="#">Show All</a>
            </div>
        </>
    );
}

export default RecentOrders;
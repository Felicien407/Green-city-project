import './app.css'

const App = () => {
  return (
    <>
      <div className="container">
        <aside>
          <div className="top">
            <div className="logo">
              <h2>
                C <span className="danger">BABAR</span>
              </h2>
            </div>
            <div className="close" id="close_btn">
              <span className="material-symbols-sharp">close</span>
            </div>
          </div>
          {/* end top */}
          <div className="sidebar">
            <a href="#">
              <span className="material-symbols-sharp">grid_view</span>
              <h3>Dashboard</h3>
            </a>
            <a href="#" className="active">
              <span className="material-symbols-sharp">person_outline</span>
              <h3>Customers</h3>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">insights</span>
              <h3>Analytics</h3>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">mail_outline</span>
              <h3>Messages</h3>
              <span className="msg_count">14</span>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">receipt_long</span>
              <h3>Products</h3>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">report_gmailerrorred</span>
              <h3>Reports</h3>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">settings</span>
              <h3>Settings</h3>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">add</span>
              <h3>Add Product</h3>
            </a>
            <a href="#">
              <span className="material-symbols-sharp">logout</span>
              <h3>Logout</h3>
            </a>
          </div>
        </aside>

        <main>
          <h1>Dashboard</h1>

          <div className="date">
            <input type="date" />
          </div>

          <div className="insights">
            {/* Start Selling */}
            <div className="sales">
              <span className="material-symbols-sharp">trending_up</span>
              <div className="middle">
                <div className="left">
                  <h3>Total Sales</h3>
                  <h1>$25,024</h1>
                </div>
                <div className="progress">
                  <svg>
                    <circle r="30" cy="40" cx="40"></circle>
                  </svg>
                  <div className="number">
                    <p>80%</p>
                  </div>
                </div>
              </div>
              <small>Last 24 Hours</small>
            </div>
            {/* End Selling */}
            {/* Start Expenses */}
            <div className="expenses">
              <span className="material-symbols-sharp">local_mall</span>
              <div className="middle">
                <div className="left">
                  <h3>Total Expenses</h3>
                  <h1>$12,345</h1>
                </div>
                <div className="progress">
                  <svg>
                    <circle r="30" cy="40" cx="40"></circle>
                  </svg>
                  <div className="number">
                    <p>50%</p>
                  </div>
                </div>
              </div>
              <small>Last 24 Hours</small>
            </div>
            {/* End Expenses */}
            {/* Start Income */}
            <div className="income">
              <span className="material-symbols-sharp">stacked_line_chart</span>
              <div className="middle">
                <div className="left">
                  <h3>Total Income</h3>
                  <h1>$15,678</h1>
                </div>
                <div className="progress">
                  <svg>
                    <circle r="30" cy="40" cx="40"></circle>
                  </svg>
                  <div className="number">
                    <p>60%</p>
                  </div>
                </div>
              </div>
              <small>Last 24 Hours</small>
            </div>
            {/* End Income */}
          </div>
          {/* End Insights */}

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
                  <td>Mini USB</td>
                  <td>4563</td>
                  <td>Due</td>
                  <td className="warning">Pending</td>
                  <td className="primary">Details</td>
                </tr>
                <tr>
                  <td>Mini USB</td>
                  <td>4563</td>
                  <td>Due</td>
                  <td className="warning">Pending</td>
                  <td className="primary">Details</td>
                </tr>
                <tr>
                  <td>Mini USB</td>
                  <td>4563</td>
                  <td>Due</td>
                  <td className="warning">Pending</td>
                  <td className="primary">Details</td>
                </tr>
                <tr>
                  <td>Mini USB</td>
                  <td>4563</td>
                  <td>Due</td>
                  <td className="warning">Pending</td>
                  <td className="primary">Details</td>
                </tr>
              </tbody>
            </table>
            <a href="#">Show All</a>
          </div>
        </main>
        {/* End Main */}

        {/* Start Right Main */}
        <div className="right">
          <div className="top">
            <button id="menu_bar">
              <span className="material-symbols-sharp">menu</span>
            </button>

            <div className="theme-toggler">
              <span className="material-symbols-sharp active">light_mode</span>
              <span className="material-symbols-sharp">dark_mode</span>
            </div>
            <div className="profile">
              <div className="info">
                <p>
                  <b>Babar</b>
                </p>
                <p>Admin</p>
                <small className="text-muted"></small>
              </div>
              <div className="profile-photo">
                <img src="./images/profile-1.jpg" alt="Profile" />
              </div>
            </div>
          </div>

          <div className="recent_updates">
            <h2>Recent Updates</h2>
            <div className="updates">
              <div className="update">
                <div className="profile-photo">
                  <img src="./images/profile-4.jpg" alt="Profile" />
                </div>
                <div className="message">
                  <p>
                    <b>Babar</b> received his order of USB
                  </p>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img src="./images/profile-3.jpg" alt="Profile" />
                </div>
                <div className="message">
                  <p>
                    <b>Ali</b> received his order of USB
                  </p>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img src="./images/profile-2.jpg" alt="Profile" />
                </div>
                <div className="message">
                  <p>
                    <b>Ramzan</b> received his order of USB
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sales-analytics">
            <h2>Sales Analytics</h2>

            <div className="item online">
              <div className="icon">
                <span className="material-symbols-sharp">shopping_cart</span>
              </div>
              <div className="right_text">
                <div className="info">
                  <h3>Online Orders</h3>
                  <small className="text-muted">Last seen 2 Hours</small>
                </div>
                <h5 className="danger">-17%</h5>
                <h3>3849</h3>
              </div>
            </div>
            <div className="item online">
              <div className="icon">
                <span className="material-symbols-sharp">shopping_cart</span>
              </div>
              <div className="right_text">
                <div className="info">
                  <h3>Online Orders</h3>
                  <small className="text-muted">Last seen 2 Hours</small>
                </div>
                <h5 className="success">+12%</h5>
                <h3>4567</h3>
              </div>
            </div>
          </div>

          <div className="item add_product">
            <div>
              <span className="material-symbols-sharp">add</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
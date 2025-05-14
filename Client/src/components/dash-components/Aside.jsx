import { Link } from "react-router-dom";

const Aside = () => {
    return (
        <>
            <aside>
                <div className="top">
                    <div className="logo">
                        <h2>
                            # <span className="danger">SeedTrack</span>
                        </h2>
                    </div>
                    <div className="close" id="close_btn">
                        <span className="material-symbols-sharp">close</span>
                    </div>
                </div>
                {/* end top */}
                <div className="sidebar">
                    <Link to="/dashboard">
                        <span className="material-symbols-sharp">grid_view</span>
                        <h3>Dashboard</h3>
                    </Link>
                    <Link to="/customers" className="active">
                        <span className="material-symbols-sharp">person_outline</span>
                        <h3>Customers</h3>
                    </Link>

                    <Link to="/">
                        <span className="material-symbols-sharp">mail_outline</span>
                        <h3>Messages</h3>
                        <span className="msg_count">14</span>
                    </Link>
                    <Link to="/dashboard/products">
                        <span className="material-symbols-sharp">receipt_long</span>
                        <h3>Products</h3>
                    </Link>

                    <Link to="/settings">
                        <span className="material-symbols-sharp">settings</span>
                        <h3>Settings</h3>
                    </Link>
                    <Link to="/dashboard/add-product">
                        <span className="material-symbols-sharp">add</span>
                        <h3>Add Product</h3>
                    </Link>
                    <Link to="/login">
                        <span className="material-symbols-sharp">logout</span>
                        <h3>Logout</h3>
                    </Link>
                </div>
            </aside>
        </>
    );
};

export default Aside;

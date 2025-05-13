const Aside = () => {
    return (
        <>
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
        </>
    );
}

export default Aside;
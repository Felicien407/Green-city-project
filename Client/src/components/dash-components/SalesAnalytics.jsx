const SalesAnalytics = () => {
    return (
        <>
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
        </>
    );
}

export default SalesAnalytics;
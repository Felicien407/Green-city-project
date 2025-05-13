const Insights = () => {
    return (
        <>
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
        </>
    );
}

export default Insights;
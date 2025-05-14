const RecentUpdates = () => {
    return (
        <>
            <div className="recent_updates">
                <h2>Recent Updates</h2>
                <div className="updates">
                    <div className="update">
                        <div className="profile-photo">
                            <img src="/images/profile-4.jpg" alt="Profile" />
                        </div>
                        <div className="message">
                            <p>
                                <b>SeedTrack</b> received his order of Tomato seeds
                            </p>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src="/images/profile-3.jpg" alt="Profile" />
                        </div>
                        <div className="message">
                            <p>
                                <b>Ali</b> received his order of Mango tree seeds
                            </p>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src="/images/profile-2.jpg" alt="Profile" />
                        </div>
                        <div className="message">
                            <p>
                                <b>Ramzan</b> received his order of Tomato seeds
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecentUpdates;
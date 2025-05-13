const Profile = () => {
    return (
        <>
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
                        <img src="/images/profile-1.jpg" alt="Profile" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
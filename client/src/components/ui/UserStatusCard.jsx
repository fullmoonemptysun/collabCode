import Avatar from './Avatar'


const UserStatusCard = ({ bg, name, line }) => {
    return (
        <div className="user-card">
            <div className="stat-avatar">
                <Avatar version={'l'} bg = {bg} name={name}>
                </Avatar>

                <div className="status-dot"></div>

            </div>
            <div className="user-info">
                <div className="user-name">{name}</div>
                <div className="user-activity">Line {line}</div>
            </div>
            <div
                className="user-cursor"
                style={{ backgroundColor: bg}}
            ></div>
        </div>
    );
};



export default UserStatusCard

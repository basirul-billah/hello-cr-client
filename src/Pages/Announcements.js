import React, { useEffect, useState } from 'react';
import Notice from '../Components/Notice';

const Announcements = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch('announcements.json')
            .then(res => res.json())
            .then(data => setNotices(data));
    }, []);

    return (
        <div>
            {
                notices.map(notice => <Notice
                    key={notice.id}
                    notice={notice}
                ></Notice>)
            }
        </div>
    );
};

export default Announcements;
import React, { useEffect, useState } from 'react';

const useNotice = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/announcements')
            .then(res => res.json())
            .then(data => setNotices(data));
    }, []);
    
    return [notices, setNotices];
};

export default useNotice;
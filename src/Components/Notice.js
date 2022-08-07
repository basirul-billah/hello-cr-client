import React from 'react';
import useNotice from '../hooks/useNotice';

const Notice = ({ notice }) => {
    const [notices, setNotices] = useNotice();
    const { _id, title, description } = notice;

    const handleDelete = _id => {
        const confirmDeletion = window.confirm("Are you sure you want to delete this item?");
        if (confirmDeletion) {
            const url = `http://localhost:5000/notice/${_id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = notices.filter(notice => notice._id !== _id);
                    setNotices(remaining);
                })
        }
    }

    return (
        <div className="card w-1/2 bg-base-100 shadow-xl mx-auto mt-10">
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">{title}</h2>
                    <button
                        className="btn btn-sm"
                        onClick={() => handleDelete(_id)}
                    >Delete</button>
                </div>
                <p>{description}</p>
            </div>
        </div >
    );
};

export default Notice;
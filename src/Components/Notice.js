import React from 'react';

const Notice = ({notice}) => {
    const {title, description} = notice;

    return (
        <div className="card w-1/2 bg-base-100 shadow-xl mx-auto mt-10">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Notice;
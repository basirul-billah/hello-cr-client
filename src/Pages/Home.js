import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='mx-20 flex gap-5'>
                <div className="w-52 mt-10 bg-primary hover:bg-primary-focus cursor-pointer text-primary-content rounded-md">
                    <Link to="/scheduler"className="flex p-5">Scheduler</Link>
                </div>
                <div className="w-52 mt-10 bg-primary hover:bg-primary-focus cursor-pointer text-primary-content rounded-md">
                    <Link to="/forum"className="flex p-5">Group Forum</Link>
                </div>
                <div className="w-52 mt-10 bg-primary hover:bg-primary-focus cursor-pointer text-primary-content rounded-md">
                    <Link to="/announcements"className="flex p-5">Announcements</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const buttons = <>
        {user
            ?
            <button onClick={logout} className='btn btn-primary'>Sign Out</button>
            :
            <>
                <Link to="/signin" className="btn btn-primary mr-5">Sign in</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 px-20 shadow-md">
            <div className="navbar-start">
                <Link to="/" className="font-bold text-xl">Hello CR</Link>
            </div>
            <div className="navbar-end">
                {buttons}
            </div>
        </div>
    );
};

export default Header;
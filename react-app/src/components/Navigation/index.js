import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const dispatch = useDispatch()

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
	  };

	return (
		<ul>
			{isLoaded && sessionUser && (
				<li>
					<button className='go-back-button' onClick={handleLogout}>Logout</button>
				</li>
			)}
		</ul>
	);
}

export default Navigation;

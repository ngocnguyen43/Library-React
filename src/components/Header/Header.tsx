/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useRef, useState } from 'react';
import { SubNav } from './SubNav/SubNav';
import useOnClickOutside from '../../hooks/useOnClickOutSide';
import "./Header.scss"
import { useContext } from 'react';
import { StoreContext } from '../../store';
import { RequiredAuth } from '../../hoc/RequiredAuth';
import { USER_LOG_IN, USER_LOG_OUT } from '../../store/Constants';
const NavItems = [
	{}
]
export const Header = () => {
	const [show, setShow] = useState(false);
	const showSubNav = () => setShow(!show);
	const navRef = useRef();
	useOnClickOutside(navRef, () => setShow(false));
	const { dispatch } = useContext(StoreContext)
	return (
		<header>
			<a className='logo' href='/'>LOGO</a>
			<main>
				<span>Notification</span>
				<RequiredAuth role=''>
					<button onClick={() => dispatch({ type: USER_LOG_IN, payload: { token: "ABC", role: "user" } })}>LOG IN</button>
					<button>REGISTER</button>
				</RequiredAuth>
				<RequiredAuth role='user'>
					<span>HELLO</span>
					<button onClick={() => dispatch({ type: USER_LOG_OUT })}>LOG OUT</button>
				</RequiredAuth>
			</main>
		</header>
	);
};

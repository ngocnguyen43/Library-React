/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useRef, useState } from 'react';
import './Header.scss';
import { SubNav } from './SubNav/SubNav';
import useOnClickOutside from './../../hooks/useOnClickOutSide';
export const Header = () => {
	const [show, setShow] = useState(false);
	const showSubNav = () => setShow(!show);
	const navRef = useRef();

	useOnClickOutside(navRef, () => setShow(false));
	// document.addEventListener('mousedown', closeSubNav);
	return (
		<div className="header">
			<header>
				<nav>
					<ul>
						<li>
							<ion-icon name="notifications"></ion-icon>
						</li>
						<li className="dropdown-nav">
							<div>
								<ion-icon name="person" onClick={showSubNav}></ion-icon>
							</div>
							{show && <SubNav ref={navRef} />}
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

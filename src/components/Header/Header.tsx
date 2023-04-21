/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useContext } from 'react';
import { StoreContext, USER_LOG_OUT } from '@store';
import { Login, Register } from '@components';
import { Navigate, useLocation } from 'react-router-dom';
import "./Header.scss"
export const Header: React.FC = () => {
	const [showLogin, setShowLogin] = React.useState<boolean>(false);
	const [showRegister, setShowRegister] = React.useState<boolean>(false)
	const { state, dispatch } = useContext(StoreContext)
	const location = useLocation();
	(showLogin || showRegister) ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "");
	return (
		<>
			<header>
				<a className='logo' href='/'>LOGO</a>
				<main>
					<span></span>
					{state.role === "" &&
						<>
							<button onClick={() => setShowLogin(true)}>LOG IN</button>
							<button onClick={() => setShowRegister(true)}>REGISTER</button>
						</>
					}
					{state.role === "user" &&
						<>
							<span>WELCOME BACK!</span>
							<button onClick={() => { dispatch({ type: USER_LOG_OUT }); return <Navigate to="/" state={{ from: location }} replace /> }}>LOG OUT</button>
						</>
					}
				</main>
			</header>
			{showLogin && (
				<>
					<div className={'login-modal-wrapper' + (showLogin ? " open" : "")} onClick={() => setShowLogin(false)}></div>
					<div className="login-modal"><Login setShowLogin={setShowLogin} setShowRegister={setShowRegister} /></div>
				</>
			)}{
				showRegister && (
					<>
						<div className={"register-modal-wrapper" + (showRegister ? " open" : "")} onClick={() => setShowRegister(false)}></div>
						<div className="register-modal"><Register setShowRegister={setShowRegister} /></div>
					</>
				)
			}
		</>
	);
};

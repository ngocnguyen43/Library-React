import './Nav.scss';
import logo from '../../../assets/library-removebg-preview.png';
export const Nav = () => {
	return (
		<>
			<header>
				<img alt="" src={logo} className="logo" />
				{/* <nav>
					<ul>
						<li>
							<a href="default.asp">Home</a>
						</li>
						<li>
							<a href="news.asp">News</a>
						</li>
						<li>
							<a href="contact.asp">Contact</a>
						</li>
						<li>
							<a href="about.asp">About</a>
						</li>
					</ul>
				</nav> */}
				<div className="header-btn ">
					<a href="/login">
						<button>Login</button>
					</a>
					<a href="/register">
						<button>Sign up</button>
					</a>
				</div>
			</header>
		</>
	);
};

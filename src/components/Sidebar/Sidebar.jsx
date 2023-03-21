import './Sidebar.scss';
export const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<div className="sidebar-content">
				<a>Logo</a>
				<a>
					<ion-icon name="home"></ion-icon>
					Dashboard
				</a>
				<a>
					<ion-icon name="people"></ion-icon>
					User
				</a>
				<a>
					<ion-icon name="book"></ion-icon>Book
				</a>
			</div>
		</div>
	);
};

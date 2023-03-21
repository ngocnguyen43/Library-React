import { Sidebar } from '../components/Sidebar/Sidebar';
import { Header } from './../components/Header/Header';
import './HomePage.scss';
export const HomePage = () => {
	return (
		<div className="homepage">
			<div className="sidebar">
				<Sidebar />
			</div>
			<div className="header-container">
				<Header></Header>
			</div>
		</div>
	);
};

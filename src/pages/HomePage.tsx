import { Sidebar } from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';
import './HomePage.scss';
import { Admin } from './admin/Admin';
export const HomePage = () => {
	return (
		<div className="homepage">
			<Admin />
		</div>
	);
};

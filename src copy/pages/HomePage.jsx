import './HomePage.scss';
import { Nav } from './../components/nav/Nav';
import { SearchBar } from './../components/SearchBar/SearchBar';
import { Card } from '../components/card/Card';
export const HomePage = () => {
	return (
		<div className="homepage">
			{/* <div className="sidebar">
				<Sidebar />
			</div>
			<div className="header-container">
				<Header></Header>
			</div> */}
			<Nav />
			<section>
				<SearchBar />
				<div>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</section>
		</div>
	);
};

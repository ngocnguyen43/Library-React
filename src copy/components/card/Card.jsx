import './Card.scss';
import Image from '../../../assets/error-image-generic-removebg-preview.png';
export const Card = () => {
	return (
		<div className="card-container">
			<figcaption>
				<img src={Image} alt="" />
			</figcaption>
			<span>Title</span>
			<br />
			<span>In stock:</span>
		</div>
	);
};

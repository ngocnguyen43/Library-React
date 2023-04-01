import { forwardRef } from 'react';
import './SubNav.scss';

export const SubNav = forwardRef(function SubNav(props, ref) {
	return (
		<div className="dropdown-content" ref={ref}>
			<a>ABC</a>
			<a>ABC</a>
			<a>ABC</a>
		</div>
	);
});

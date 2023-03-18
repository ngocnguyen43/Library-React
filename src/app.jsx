import { createRoot } from 'react-dom/client';
const App = () => {
	return (
		<div className="abc">
			<h1>Heeeeee</h1>
		</div>
	);
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

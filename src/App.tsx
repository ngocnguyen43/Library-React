import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";
import { HomePage } from './pages/HomePage';
const App = () => {
	return (
		<StrictMode>
			<HomePage></HomePage>
		</StrictMode>
	);
};
const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);
root.render(<App />);

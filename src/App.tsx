import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";
import { HomePage } from './pages/';
import { StoreProvider } from './store';
const App = () => {
	return (
		// <StrictMode>
		<StoreProvider>
			<HomePage></HomePage>
		</StoreProvider>
		//</StrictMode > 
	);
};
const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);
root.render(<App />);

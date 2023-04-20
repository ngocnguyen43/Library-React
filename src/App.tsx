import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";
import { HomePage, Admin, ErrorPage } from '@pages';
import { StoreProvider } from '@store';
const App = () => {
	return (
		// <StrictMode>
		<StoreProvider>
			<ErrorPage>

				<Admin />
			</ErrorPage>
			{/* <HomePage></HomePage> */}
		</StoreProvider>
		//</StrictMode > 
	);
};
const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);
root.render(<App />);

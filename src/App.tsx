import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";
import { StoreProvider } from '@store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Issue, RequireAuth, User, AdminBook, Logout, DashBoard } from '@components';
import { HomePage, ErrorPage, RedirectAccess, Login, Unauthorization } from '@pages';
import { Layout } from './components/layout/Layout';
const App = () => {
	return (
		<StrictMode>
			<StoreProvider>
				<ErrorPage>
					<BrowserRouter >
						<Routes >
							<Route path='/logout' element={<Logout />} />
							<Route element={<RedirectAccess />} >
								<Route path="/login" element={<Login />} />
								<Route path="/register" element={<Login />} />
							</Route>
							<Route path="/error" element={<Unauthorization />} />
							<Route element={<RequireAuth roles={["", "user"]} />}>
								<Route path="/" element={<HomePage />} />
							</Route>
							<Route path='/' element={<Layout />}>
								<Route path='home' element={<><DashBoard /></>} />
								<Route path="books" element={<><AdminBook /></>} />
								<Route path="users" element={<><User /></>} />
								<Route path="issues" element={<><Issue /></>} />
							</Route>
							<Route path="*" element={<>Error</>} />
						</Routes>
					</BrowserRouter>
				</ErrorPage>
			</StoreProvider>
		</StrictMode >
	);
};
const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);
root.render(<App />);

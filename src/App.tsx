import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";
import { StoreProvider } from '@store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Book, Issue, RequireAuth, User, AdminBook } from '@components';
import { HomePage, Admin, ErrorPage, RedirectAccess, Login, Unauthorization } from '@pages';
import { Layout } from './components/layout/Layout';
const App = () => {
	return (
		<StrictMode>
			<StoreProvider>
				<ErrorPage>
					<BrowserRouter >
						<Routes >
							<Route element={<RedirectAccess />} >
								<Route path="/login" element={<Login />} />
								<Route path="/register" element={<Login />} />
							</Route>
							<Route path="/error" element={<Unauthorization />} />
							<Route element={<RequireAuth roles={["", "user"]} />}>
								<Route path="/" element={<HomePage />} />
							</Route>
							{/* <Route element={<RequireAuth roles={["admin"]} />} > */}
							<Route path='/' element={<Layout />}>
								<Route path='home' element={<></>} />
								<Route path="books" element={<><AdminBook /></>} />
								<Route path="users" element={<><User /></>} />
								<Route path="issues" element={<><Issue /></>} />
							</Route>
							{/* </Route > */}
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

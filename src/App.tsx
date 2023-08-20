import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import { useDispatch } from 'react-redux';

// components
import PublicRoute from '@/components/PublicRoute';

import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoute from '@/components/PrivateRoute';
import { useGetCurrentUserQuery } from '@/features/auth/authApi';
import { updateCurrentUser } from '@/features/auth/authSlice';

function App() {
	const dispatch = useDispatch();
	const { isLoading, error } = useGetCurrentUserQuery(undefined, {
		skip: !localStorage.getItem('loggedIn')
	});

	useEffect(() => {
		if (error) {
			localStorage.removeItem('loggedIn');
			dispatch(updateCurrentUser(null));
		}
	}, [error, dispatch]);

	if (isLoading) {
		return <div className="flex justify-center items-center h-screen">Loading...</div>;
	}
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;

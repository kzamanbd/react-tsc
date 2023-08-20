import apiSlice from '../api/apiSlice';
import { updateCurrentUser } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: '/auth/login',
				method: 'POST',
				body: data
			}),
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const result = await queryFulfilled;
					localStorage.setItem('loggedIn', 'true');
					dispatch(updateCurrentUser(result.data?.user));
				} catch (error) {
					console.error(error);
				}
			}
		}),

		getCurrentUser: builder.query({
			query: () => '/refresh-token',
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const result = await queryFulfilled;
					dispatch(updateCurrentUser(result.data?.user));
				} catch (error) {
					console.error(error);
				}
			}
		})
	})
});

export const { useLoginMutation, useGetCurrentUserQuery } = authApi;

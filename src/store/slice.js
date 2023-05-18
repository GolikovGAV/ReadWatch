import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	theme: 'light',
	list: []
};

if (localStorage.store) {
	initialState.list = JSON.parse(localStorage.store);
}

export const mySlice = createSlice({
	name: 'myList',
	initialState,
	reducers: {
		changeTheme: (state, action) => {
			if (state.theme === 'light') {
				state.theme = 'dark';
			} else {
				state.theme = 'light';
			}
		},
		addNew: (state, action) => {
			state.list.push(action.payload);
			localStorage.store = JSON.stringify(state.list);
		},
		deleteElement: (state, action) => {
			state.list = state.list.filter((item) => item.id !== action.payload);
			localStorage.store = JSON.stringify(state.list);
		},
		incCount: (state, action) => {
			state.list.find((item) => {
				if (item.id == action.payload) {
					item.number += 1;
					localStorage.store = JSON.stringify(state.list);
				}
			});
		},
		decCount: (state, action) => {
			state.list.find((item) => {
				if (item.id == action.payload) {
					item.number -= 1;
					localStorage.store = JSON.stringify(state.list);
				}
			});
		}
	}
});

export const { addNew, deleteElement, incCount, decCount, changeTheme } =
	mySlice.actions;

export default mySlice.reducer;

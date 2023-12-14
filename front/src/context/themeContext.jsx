import {createContext, useContext, useReducer} from 'react';

const TOGGLE_THEME = 'TOGGLE_THEME';

function reducer(state, action) {
	switch (action.type) {
		case TOGGLE_THEME:
			return {
				...state,
				theme: state.theme === 'light' ? 'dark' : 'light',
			};
		default:
			return state;
	}
}

const initialState = {
	theme: 'light',
};

export const ThemeContext = createContext();

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used inside a ThemeProvider');
	}
	return context;
}

export function ThemeProvider({children}) {
	const [state, dispatch] = useReducer(reducer, initialState);

	function toggleTheme() {
		dispatch({type: TOGGLE_THEME});
	}

	const value = {
		theme: state,
		toggleTheme,
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export {ThemeProvider, useTheme};

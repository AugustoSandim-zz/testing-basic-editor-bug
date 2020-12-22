export interface ApplicationState {
	count: number;
	greeting: string;
	editor: string;
}

export const defaultState: () => ApplicationState = () => {
	let editor = '';

	if(typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem('editor')) {
		// Lógica para recuperar o estado do editor na memória do browser
		editor = window.localStorage.getItem('editor');
	}

	return {
		count: 0,
		greeting: "React-TypeScript-Redux Example",
		editor,
	}
};

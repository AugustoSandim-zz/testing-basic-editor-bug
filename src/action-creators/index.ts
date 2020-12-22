import * as ActionTypes from "../action-types/index";

export type UpdateGreetingAction = {
	type: ActionTypes.UPDATE_GREETING;
	greeting: string;
};

export type IncrementAction = {
	type: ActionTypes.INCREMENT;
};

export type EditAction = {
	type: ActionTypes.EDIT;
	editor: string;
};

export type updateGreeting = typeof updateGreeting;
export type increment = typeof increment;

export function updateGreeting(greeting: string): UpdateGreetingAction {
	return {
		type: ActionTypes.UPDATE_GREETING,
		greeting,
	};
}

export function increment(): IncrementAction {
	return {
		type: ActionTypes.INCREMENT,
	};
}

export function editorChanges(value: string): EditAction {
  if(typeof window !== 'undefined' && window.localStorage) {
    // Lógica para definir o estado do editor na memória do browser
    window.localStorage.setItem('editor', value);
  }

	return {
		type: ActionTypes.EDIT,
		editor: value,
	};
}

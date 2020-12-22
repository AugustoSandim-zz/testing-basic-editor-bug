import { defaultState } from "../application-state";
import { ApplicationState } from "../application-state";

import {
	IncrementAction,
	UpdateGreetingAction,
	EditAction,
} from "../action-creators/index";
import * as ActionTypes from "../action-types/index";

type Action = UpdateGreetingAction | IncrementAction | EditAction;

const updateState = (
	state: ApplicationState = defaultState(),
	action: Action
) => {
	switch (action.type) {
		case ActionTypes.UPDATE_GREETING:
			return {
				...state,
				greeting: action.greeting,
			};

		case ActionTypes.INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};

		case ActionTypes.EDIT:
			return {
				...state,
				editor: action.editor,
			};

		default:
			return state;
	}
};

export default updateState;

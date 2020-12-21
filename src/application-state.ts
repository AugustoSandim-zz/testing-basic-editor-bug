export interface ApplicationState {
	count: number;
	greeting: string;
	editor: string;
}

export const defaultState: ApplicationState = {
	count: 0,
	greeting: "React-TypeScript-Redux Example",
	editor: "",
};

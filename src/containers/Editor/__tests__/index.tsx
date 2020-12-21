import * as React from "react";

import { render } from "enzyme";

import Editor from "../index";

import { createStore } from "redux";
import { Provider } from "react-redux";
import updateState from "../../../reducers/index";

describe("The <Editor /> Component", () => {
	it("renders correctly", () => {
		const store = createStore(updateState);

		const wrapper = render(
			<Provider store={store}>
				<Editor />
			</Provider>
		);

		expect(wrapper.find("#text")).toBeDefined();
		expect(wrapper.find(".view")).toBeDefined();
	});
});

import * as React from "react";

import { render } from "enzyme";

import Editor from "../index";

import { createStore } from "redux";
import { Provider } from "react-redux";
import updateState from "../../../reducers/index";

describe("The <Editor /> Component", () => {
	it("renders correctly", () => {
    const store = createStore(updateState);

    let localStorageMock = (function() {
      let _store: any = {};
      return {
        getItem: function(key: string) {
          return _store[key];
        },
        setItem: function(key: string, value: any) {
          _store[key] = value.toString();
        },
        clear: function() {
          _store = {};
        },
        removeItem: function(key: string) {
          delete _store[key];
        }
      };
    })();

    localStorageMock.setItem('editor', 'teste de persistencia');

    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

		const wrapper = render(
			<Provider store={store}>
				<Editor />
			</Provider>
		);

		expect(wrapper.find("#text")).toBeDefined();
		expect(wrapper.find(".view")).toBeDefined();
	});
});

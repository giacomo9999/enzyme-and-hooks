import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("counter starts at 0", () => {
  const count = findByTestAttr(setup(), "count").text();
  expect(count).toBe("0");
});

test("clicking on button increments counter display", () => {
  const button = findByTestAttr(setup(), "increment-button");
  // console.log("Button:", button.debug());
  button.simulate("click");
  const count = findByTestAttr(setup(), "count").text();
  expect(count).toBe("1");
});

/*global describe it*/
/*global expect*/
import reducer from "reducers/todos";

describe("reducers/todos", () => {
  it("returns the initial state", () => {
    const state = void 0;
    expect(
      reducer(state, {})
    ).to.deep.equal([]);
  });
});

/*global React*/
/*global describe it*/
/*global expect*/
import AddTodo from "components/AddTodo";
import { shallow } from "enzyme";

describe("components/AddTodo", () => {
  it("renders without an issue", () => {
    const subject = <AddTodo />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});


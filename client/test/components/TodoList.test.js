/*global React*/
/*global describe it*/
/*global expect*/
import TodoList from "components/TodoList";
import { shallow } from "enzyme";

describe("components/TodoList", () => {
  it("renders without an issue", () => {
    const subject = <TodoList todos={[]} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

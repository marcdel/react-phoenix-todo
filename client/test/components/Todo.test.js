/*global React*/
/*global describe it*/
/*global expect*/
import Todo from "components/Todo";
import { shallow } from "enzyme";

describe("components/Todo", () => {
  it("renders without an issue", () => {
    const subject = <Todo todo={{}} />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

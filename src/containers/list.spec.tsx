import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";

import { ListContainer } from "@src/containers";
import { componentWithIntl } from "@src/utils";

afterEach(cleanup);

describe("ListContainer", () => {
  it("should call onReset when reset button is clicked", () => {
    const getUsers = jest.fn();
    const component = render(
      componentWithIntl(<ListContainer users={[]} usersFetching={false} getUsers={getUsers} />)
    );
    fireEvent.click(component.getByText("Refresh"));
    expect(getUsers).toHaveBeenCalled();
  });
});

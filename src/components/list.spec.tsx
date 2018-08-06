import * as React from "react";
import { cleanup, render } from "react-testing-library";

import { List } from "@src/components";
import { User } from "@src/models";
import { componentWithIntl } from "@src/utils";

afterEach(cleanup);

describe("List component", () => {
  it("should render empty list when there is no items to load", () => {
    const component = render(
      componentWithIntl(<List items={[]} loading={false} onReload={jest.fn()} />)
    );
    expect(component).toMatchSnapshot();
  });

  it("should render items list", () => {
    const users = User.create({
      avatar_url: "https://",
      bio: "bio",
      blog: "blog",
      html_url: "https://",
      id: "1",
      public_repos: 1,
      name: "name",
      login: "user",
    });
    const component = render(
      componentWithIntl(<List items={[users]} loading={false} onReload={jest.fn()} />)
    );
    expect(component).toMatchSnapshot();
  });
});

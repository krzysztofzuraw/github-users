import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";

import { LocaleContainer } from "@src/containers";
import { componentWithIntl } from "@src/utils";

afterEach(cleanup);

describe("LocaleContainer", () => {
  it("should call changeLocale when button is clicked", () => {
    const changeLocale = jest.fn();
    const component = render(
      componentWithIntl(<LocaleContainer selectedLang={"pl"} changeLocale={changeLocale} />)
    );
    fireEvent.click(component.getByText("EN"));
    expect(changeLocale).toHaveBeenCalled();
  });
});

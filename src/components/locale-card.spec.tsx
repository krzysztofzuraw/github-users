import each from "jest-each";
import * as React from "react";
import { cleanup, render } from "react-testing-library";

import { LocaleCard } from "@src/components/locale-card";
import { componentWithIntl } from "@src/utils";

afterEach(cleanup);

describe("Locale card", () => {
  each([["pl"], ["en"]]).test("should render card when %s language is selected", (lang: string) => {
    const component = render(
      componentWithIntl(<LocaleCard selectedLang={lang} onClick={jest.fn()} />)
    );
    expect(component).toMatchSnapshot();
  });
});

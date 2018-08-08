import "@src/rxjs-imports";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Main } from "@src/pages";
import store from "@src/store";

const Root = (
  <Provider store={store}>
    <Main />
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root") as HTMLElement);

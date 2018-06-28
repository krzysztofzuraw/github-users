import * as React from "react";
import { connect } from "react-redux";

import { LocaleCard } from "@src/components";

const Component: React.SFC = () => <LocaleCard onClick={lang => console.log(lang)} />;
export const LocaleContainer = connect()(Component);

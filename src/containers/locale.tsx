import * as React from "react";
import { connect } from "react-redux";
import Types from "Types";

import { LocaleCard } from "@src/components";
import { localesActions, localesSelectors } from "@src/features/locales";
import { Locale } from "@src/models";

const mapStateToProps = (state: Types.RootState) => ({
  selectedLang: localesSelectors.getCurrentLang(state),
});

const mapDispatchToProps = {
  changeLocale: localesActions.changeLocale,
  setDefaultLocale: localesActions.setDefaultLocale,
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

class Component extends React.Component<Props> {
  handleClick = (lang: string) => {
    const { changeLocale } = this.props;
    const model = new Locale(lang);
    changeLocale(model);
  };

  render() {
    return <LocaleCard onClick={this.handleClick} selectedLang={this.props.selectedLang} />;
  }
}
export const LocaleContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

import { Button, Card } from "antd";
import * as React from "react";
import { style } from "typestyle";

interface IProps {
  onClick: (lang: string) => void;
}

interface IState {
  currentLang: string;
}

const styles = {
  card: style({
    marginTop: "20px",
  }),
  wrapper: style({
    display: "flex",
    justifyContent: "space-between",
  }),
};

export class LocaleCard extends React.Component<IProps, IState> {
  state = { currentLang: "pl" };

  handleClick = (lang: string) => {
    this.setState({ currentLang: lang });
    this.props.onClick(lang);
  };

  getButtonType = (lang: string) => {
    const { currentLang } = this.state;
    return currentLang === lang ? "primary" : "default";
  };

  render() {
    const { handleClick, getButtonType } = this;
    return (
      <Card title="Change locale" className={styles.card}>
        <div className={styles.wrapper}>
          <Button shape="circle" type={getButtonType("en")} onClick={() => handleClick("en")}>
            EN
          </Button>
          <Button shape="circle" type={getButtonType("pl")} onClick={() => handleClick("pl")}>
            PL
          </Button>
        </div>
      </Card>
    );
  }
}

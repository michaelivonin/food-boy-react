import React from 'react';
import './FoodBoy.sass';
import User from './components/User/User';
import Icon from '@mdi/react';
import { mdiForwardburger } from '@mdi/js';
import Media from 'react-media';
import Order from './components/Order/Order';
import History from "./components/History/History";

class FoodBoy extends React.Component {
  constructor(props) {
    super(props);
    this.handleVariant2Change = this.handleVariant2Change.bind(this);
    this.handleEverythingChange = this.handleEverythingChange.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      isVariant2: false,
      showAll: false,
      isHistoryMenuOpen: false,
    };
  }

  handleVariant2Change(e) {
    this.setState({
      isVariant2: e.target.checked,
    });
  }

  handleEverythingChange(e) {
    this.setState({
      showAll: e.target.checked,
    });
  }

  toggleMenu(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      isHistoryMenuOpen: !prevState.isHistoryMenuOpen
    }));
  }

  render() {
    return (
      <div className="food-boy">
        <header className="header">
          <User
            onVariant2Change={this.handleVariant2Change}
            onEverythingChange={this.handleEverythingChange}
          />
        </header>
        <main className="main">
          <aside className={this.state.isHistoryMenuOpen ? "main__panel main__panel_open" : "main__panel"}>
            <a
              className="main__toggle mui--visible-xs-inline-block mui--visible-sm-inline-block"
              href="/"
              onClick={this.toggleMenu}
            >
              <Icon
                className="main__burger"
                path={mdiForwardburger}
                size={1}
                horizontal
                rotate={this.state.isHistoryMenuOpen ? 0 : 180}
                color="grey"
              />
            </a>
            <Media query="(min-width: 1024px)" render={() =>
              (
                <Order variant2={this.state.isVariant2} showAll={this.state.showAll} />
              )}
            />
            <History className={this.state.isHistoryMenuOpen ?
              "history" :
              "history mui--hidden-xs mui--hidden-sm"
            }/>
          </aside>
          <div className="main__inner">
            <div className="main__map-wrapper"></div>
            <Media query="(max-width: 1023px)" render={() =>
              (
                <Order variant2={this.state.isVariant2} showAll={this.state.showAll} />
              )}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default FoodBoy;
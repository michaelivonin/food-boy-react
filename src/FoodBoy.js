import React from 'react';
import './FoodBoy.sass';
import User from './components/User/User';
import Media from 'react-media';
import Order from './components/Order/Order';
import History from "./components/History/History";

class FoodBoy extends React.Component {
  constructor(props) {
    super(props);
    this.handleVariant2Change = this.handleVariant2Change.bind(this);
    this.handleEverythingChange = this.handleEverythingChange.bind(this);
    this.state = {
      isVariant2: false,
      showAll: false,
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
          <aside className="main__panel">
            <Media query="(min-width: 1024px)" render={() =>
              (
                <Order variant2={this.state.isVariant2} showAll={this.state.showAll} />
              )}
            />
            <History />
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
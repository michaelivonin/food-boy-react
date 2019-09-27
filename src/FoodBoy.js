import React from 'react';
import './FoodBoy.sass';
//import CommonMenu from './components/CommonMenu/CommonMenu';
import User from './components/User/User';
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
          {/*<CommonMenu
            mode="horizontal"
            openAnimation="slide-up"
            triggerSubMenuAction="click"
          />*/}
          <User
            onVariant2Change={this.handleVariant2Change}
            onEverythingChange={this.handleEverythingChange}
          />
        </header>
        <main className="main">
          <aside className="panel">
            <h1 className="panel__heading">Разместить заказ</h1>
            <Order variant2={this.state.isVariant2} showAll={this.state.showAll} />
            <History />
          </aside>
          <div className="inner-container"></div>
        </main>
      </div>
    );
  }
}

export default FoodBoy;
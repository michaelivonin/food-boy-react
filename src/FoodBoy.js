import React from 'react';
import './FoodBoy.sass';
//import CommonMenu from './components/CommonMenu/CommonMenu';
import User from './components/User/User';
import Order from './components/Order/Order';

class FoodBoy extends React.Component {
  render() {
    return (
      <div className="food-boy">
        <header className="header">
          {/*<CommonMenu
            mode="horizontal"
            openAnimation="slide-up"
            triggerSubMenuAction="click"
          />*/}
          <User />
        </header>
        <main className="main">
          <aside className="panel">
            <h1 className="panel__heading">Разместить заказ</h1>
            <Order />
          </aside>
          <div className="inner-container"></div>
        </main>
      </div>
    );
  }
}

export default FoodBoy;
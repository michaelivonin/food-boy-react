import React from 'react';
import './FoodBoy.sass';
import CommonMenu from './components/CommonMenu/CommonMenu';
import Form from './components/Form/Form';

class FoodBoy extends React.Component {
  render() {
    return (
      <div className="food-boy">
        <header className="header">
          <CommonMenu
            mode="horizontal"
            openAnimation="slide-up"
            triggerSubMenuAction="click"
          />
        </header>
        <main className="main">
          <aside className="panel">
            <h1 className="panel__heading">Разместить заказ</h1>
            <Form />
          </aside>
          <div className="inner-container"></div>
        </main>
      </div>
    );
  }
}

export default FoodBoy;
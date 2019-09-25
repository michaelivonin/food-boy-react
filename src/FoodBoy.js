import React from 'react';
import './FoodBoy.sass';
import CommonMenu from './components/CommonMenu/CommonMenu';

class FoodBoy extends React.Component {
  render() {
    return (
      <div className="food-boy">
        <header className="header">
          <div className="container">
            <CommonMenu
              mode="horizontal"
              openAnimation="slide-up"
              triggerSubMenuAction="click"
            />
          </div>
        </header>
      </div>
    );
  }
}

export default FoodBoy;
import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import './History.sass';

class History extends React.Component {
  render() {
    return (
      <div className="history">
        <h3>Заказы</h3>
        <Collapse>
          <Panel header="№ 9088373" headerClass="my-header-class">
            <p className="history__date">
              от <b>01.09.2019 22:29</b>
            </p>
            <p className="history__address">Ленина, д. 14</p>
            <span className="history__price">Стоимость:&nbsp;<b>150&nbsp;р. </b></span>
            <span className="history__delivery-price">Доставка:&nbsp;<b>0&nbsp;р.</b></span>
          </Panel>
          <Panel header="№">Данные заказа</Panel>
        </Collapse>
      </div>
    );
  }
}

export default History;
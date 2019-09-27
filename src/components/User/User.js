import React from 'react';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import './User.sass';

class User extends React.Component {
  render() {
    return (
      <Dropdown className="account-dropdown">
        <DropdownTrigger>
          <img className="account-dropdown__avatar" alt=""/>
          <span className="account-dropdown__name">Халиф Доставка</span>
        </DropdownTrigger>
        <DropdownContent>
          <div className="account-dropdown__identity account-dropdown__segment">
            Вошли как <strong>User#</strong>
          </div>
          <ul className="account-dropdown__quick-links account-dropdown__segment">
            <li className="account-dropdown__link">
              <a className="account-dropdown__link__anchor" href="#">Вариант 2</a>
            </li>
            <li className="account-dropdown__link">
              <a className="account-dropdown__link__anchor" href="#">Показать всё</a>
            </li>
          </ul>
          <ul className="account-dropdown__management-links account-dropdown__segment">
            <li className="account-dropdown__link">
              <a className="account-dropdown__link__anchor" href="http://foodboy.ru/logout/?next=/">
                Выход
              </a>
            </li>
          </ul>
        </DropdownContent>
      </Dropdown>
    );
  }
}

export default User;
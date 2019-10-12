import React from 'react';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import Icon from '@mdi/react';
import { mdiAccountBox, mdiMenu } from '@mdi/js';
import Checkbox from 'muicss/lib/react/checkbox';
import './User.sass';

class User extends React.Component {
  render() {
    return (
      <Dropdown className="account-dropdown">
        <DropdownTrigger>
          <Icon
            className="mui--visible-xs-inline-block mui--visible-sm-inline-block"
            path={mdiMenu}
            size={1}
            horizontal
            color="grey"
          />
          <Icon
            className="mui--hidden-xs mui--hidden-sm"
            path={mdiAccountBox}
            title="User Profile"
            size={1}
            horizontal
            color="grey"
          />
          <span className="account-dropdown__name mui--hidden-xs mui--hidden-sm">Халиф Доставка</span>
        </DropdownTrigger>
        <DropdownContent>
          <div className="account-dropdown__identity account-dropdown__segment">
            Вошли как <strong>User#</strong>
          </div>
          <ul className="account-dropdown__quick-links account-dropdown__segment">
            <li className="account-dropdown__link">
              <Checkbox name="inputA2" label="Вариант 2" onChange={(e) => this.props.onVariant2Change(e)} />
            </li>
            <li className="account-dropdown__link">
              <Checkbox name="inputA2" label="Показать всё" onChange={(e) => this.props.onEverythingChange(e)} />
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
import React from 'react';
import PropTypes from 'prop-types';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';

class CommonMenu extends React.Component {
  render() {
    const { triggerSubMenuAction } = this.props;

    return (
      <Menu
        className="menu"
        triggerSubMenuAction={triggerSubMenuAction}
        mode={this.props.mode}
        openAnimation={this.props.openAnimation}
      >
        <SubMenu title={<span className="submenu-title-wrapper">Халиф Доставка</span>} key="1">
          <MenuItem key="1-1">
            <a href="http://foodboy.ru/logout/?next=/">Выход</a>
          </MenuItem>
        </SubMenu>
      </Menu>
    );
  }
}

CommonMenu.propTypes = {
  mode: PropTypes.string,
  openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  triggerSubMenuAction: PropTypes.string,
  defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
  updateChildrenAndOverflowedIndicator: PropTypes.bool,
};

export default CommonMenu;
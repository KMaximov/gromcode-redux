import React, { Component } from 'react';
import { userContext } from './user-context';

class UserMenu extends Component {
  render() {
    const { name, url, alt } = this.context;
    return (
      <div className='menu'>
        <span className='menu__greeting'>Hello, {name}</span>
        <img src={url} alt={alt} className='menu__avatar' />
      </div>
    )
  }
}

UserMenu.contextType = userContext;

export default UserMenu;

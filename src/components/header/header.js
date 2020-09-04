import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import UserPanel from '../user-panel/user-panel';
import MenuPanel from '../menu-panel/menu-panel';
import './header.scss';
import { Template } from 'devextreme-react/core/template';

export default ({ menuToggleEnabled, title, toggleMenu, box }) => (
  <header className={'header-component'}>
    <Toolbar className={'header-toolbar'}>
      <Item
        visible={menuToggleEnabled}
        location={'before'}
        widget={'dxButton'}
        cssClass={'menu-button'}
      >
        <Button icon="menu" stylingMode="text" onClick={toggleMenu} />
      </Item>
      <Item
        location={'before'}
        cssClass={'header-title'}
        text="Arc Logistic"
        visible={!!title}
      />
      <Item>
         <MenuPanel/>
      </Item>
      <Item
        location={'after'}
        locateInMenu={'auto'}
        menuItemTemplate={'userPanelTemplate'}
      >
        <Button
          className={'user-button authorization'}
          width={210}
          height={'100%'}
          stylingMode={'text'}
        >
          <UserPanel menuMode={'context'} />
        </Button>
      </Item>
      <Template name={'userPanelTemplate'}>
        <UserPanel menuMode={'list'} />
      </Template>
    </Toolbar>
  </header>
);


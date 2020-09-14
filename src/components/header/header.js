import React, {useState,useCallback} from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import MenuPanel from '../menu-panel/menu-panel';
import UserPanel from '../user-panel/user-panel';
import './header.scss';
import { Template } from 'devextreme-react/core/template';

const printLabel = (e) => {
    alert("test");
}

export default ({ menuToggleEnabled, title, toggleMenu, box}) => { 
    return(
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
             <Item location={'Before'} locateInMenu={'auto'}>
                <MenuPanel className={'orders'}/>
            </Item>
            <Item location={'after'} locateInMenu={'auto'}>
                <Button className="test" icon="print" onClick={printLabel}/>
            </Item>
            <Item
                location={'after'}
                locateInMenu={'auto'}
                menuItemTemplate={'userPanelTemplate'}
                >
                <Button
                    className={'user-button authorization'}
                    width={50}
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
)};


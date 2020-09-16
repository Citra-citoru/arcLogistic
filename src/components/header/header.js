import React, {useContext} from 'react';
import NavLink from 'react-router-dom/NavLink';
import Toolbar, {Item} from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import MenuPanel from '../menu-panel/menu-panel';
import UserPanel from '../user-panel/user-panel';
import './header.scss';
import {Template} from 'devextreme-react/core/template';
import {NavbarContext} from '../../contexts/top-navigation';

const printLabel = (e) => {
    alert("test");
}

const refreshBtnOnClick = (e) => {

}


export default({menuToggleEnabled, title, toggleMenu, box}) => {
    const menu = useContext(NavbarContext);
    return (
        <header className={'header-component'}>
            <Toolbar className={'header-toolbar'}>
                <Item
                    visible={menuToggleEnabled}
                    location={'before'}
                    widget={'dxButton'}
                    cssClass={'menu-button'}>
                    <Button icon="menu" stylingMode="text" onClick={toggleMenu}/>
                </Item>
                <Item
                    location={'before'}
                    cssClass={'header-title'}
                    text="Arc Logistic"
                    visible={!!title}/>
                <Item 
                location={'Before'} 
                locateInMenu={'auto'}
                menuItemTemplate = {'MenuPanelTemplate'}>
                    <MenuPanel/>
                </Item>
                <Item className="icon-menu" location={'after'} locateInMenu={'auto'}>
                    <Button className="icon-menu" icon="refresh" onClick={refreshBtnOnClick}/>
                </Item>
                <Item location={'after'} locateInMenu={'auto'}>
                    <Button className="icon-menu" icon="print" onClick={printLabel}/>
                </Item>
                <Item location={'after'} locateInMenu={'auto'}>
                    <Button  renderAs={NavLink} className="icon-menu" icon="preferences" onClick={e=>menu.setMenuID("settings")}  to="/settings/my-profile" activeClassName="navlink-active" />
                </Item>
                <Item className="icon-menu" location={'after'} locateInMenu={'auto'}>
                    <Button icon="help" />
                </Item>
                <Item className="icon-menu"
                    location={'after'}
                    locateInMenu={'auto'}
                    menuItemTemplate={'userPanelTemplate'}>
                    <Button
                        className={'user-button authorization'}
                        width={50}
                        height={'100%'}
                        stylingMode={'text'}>
                        <UserPanel menuMode={'context'}/>
                    </Button>
                </Item>
                <Template name={'userPanelTemplate'}>
                    <UserPanel menuMode={'list'}/>
                </Template>
                <Template name={'MenuPanelTemplate'}>
                    <MenuPanel menuMode={'list'}/>
                </Template>
            </Toolbar>
        </header>
    )
};

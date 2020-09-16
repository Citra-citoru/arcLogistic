import React, { useState, useEffect, useRef, useCallback, useMemo,useContext } from 'react';
import TreeView from 'devextreme-react/tree-view';
import { OrdersNavigation } from '../top-navigation/orders/navigation';
import { ShipmentsNavigation } from '../top-navigation/shipments/navigation';
import { SettingsNavigation } from '../top-navigation/settings/navigation';
import { useNavigation } from '../../contexts/navigation';
import { useScreenSize } from '../../utils/media-query';
import './side-navigation-menu.scss';
import { NavbarContext } from '../../contexts/top-navigation';
import * as events from 'devextreme/events';

export default function (props) {
  const {
    children,
    selectedItemChanged,
    openMenu,
    compactMode,
    onMenuReady
  } = props;

  const { isLarge } = useScreenSize();
  var menu = useContext(NavbarContext);

  function normalizePath (menuID) {
    if(menuID === 'orders'){
        return  OrdersNavigation.map((item) => {
            if(item.path && !(/^\//.test(item.path))){ 
                item.path = `/${item.path}`;
            }
            return {...item, expanded: isLarge} 
            });
    }
    else if(menuID === 'shipments'){
        return  ShipmentsNavigation.map((item) => {
            if(item.path && !(/^\//.test(item.path))){ 
                item.path = `/${item.path}`;
            }
            return {...item, expanded: isLarge} 
        });
    }
    else if(menuID === 'settings'){
        return  SettingsNavigation.map((item) => {
            if(item.path && !(/^\//.test(item.path))){ 
                item.path = `/${item.path}`;
            }
            return {...item, expanded: isLarge} 
        });
    }
    else{
        return  OrdersNavigation.map((item) => {
            if(item.path && !(/^\//.test(item.path))){ 
                item.path = `/${item.path}`;
            }
            return {...item, expanded: isLarge} 
        });
    }
  }

  const items = useMemo(   
    () => normalizePath(menu.menuID),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [menu.menuID]
  );

  const { navigationData: { currentPath } } = useNavigation();

  const treeViewRef = useRef();
  const wrapperRef = useRef();
  const getWrapperRef = useCallback((element) => {
    const prevElement = wrapperRef.current;
    if (prevElement) {
      events.off(prevElement, 'dxclick');
    }

    wrapperRef.current = element;
    events.on(element, 'dxclick', e => {
      openMenu(e);
    });
  }, [openMenu]);

  useEffect(() => {
    const treeView = treeViewRef.current && treeViewRef.current.instance;
    if (!treeView) {
      return;
    }

    if (currentPath !== undefined) {
      treeView.selectItem(currentPath);
      treeView.expandItem(currentPath);
    }

    if (compactMode) {
      treeView.collapseAll();
    }
  }, [currentPath, compactMode]);

  return (
    <div
      className={'dx-swatch-additional side-navigation-menu'}
      ref={getWrapperRef}
    >
      {children}
      <div className={'menu-container'}>
        <TreeView
          ref={treeViewRef}
          dataSource={items}
          keyExpr={'path'}
          selectionMode={'single'}
          focusStateEnabled={false}
          expandEvent={'click'}
          onItemClick={selectedItemChanged}
          onContentReady={onMenuReady}
          width={'100%'}
        />
      </div>
    </div>
  );
}

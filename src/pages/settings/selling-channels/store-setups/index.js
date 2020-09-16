import React, {Fragment} from 'react';
import { Button } from 'devextreme-react/button';
import './index.scss';

const CreateStoreOnClick = () => {
    alert('work');
}
export default function StoreSetUps(){
    return(
        <Fragment>
            <h4 className={'content-block'}>Store Setup</h4>
            <Button type={'default'} text={' + Connect a Store or Marketplace'} onClick={CreateStoreOnClick}/>
        </Fragment>        
    )
}
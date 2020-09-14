import React , {useState,useEffect} from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {Column, Pager, Paging, FilterRow, Lookup,Export, Selection} from 'devextreme-react/data-grid';
import {Button} from 'devextreme-react/button';
import {DropDownButton} from 'devextreme-react/drop-down-button';
import './awaiting-payment.scss';
import { Popup } from 'devextreme-react/popup';
import newOrder from '../new-orders/new-order';
import service from './dropdown-data.js';

export default function manualorders() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isPopUpVisible,setIsPopUpVisible] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setData(service.getData());
    },[]);
    
    return (
        <React.Fragment>
            <h4 className={'content-block'}>Awaiting Payment</h4>
            <Popup
                    title="New Order"
                    visible={isPopUpVisible}
                    contentRender={newOrder}
                    onHiding={e=>setIsPopUpVisible(false)}
            />
            <div className={'content-block'}>
                <Button className="m-2 lower-text" type="default" disabled={false} text="Marked As Paid"/>
                <DropDownButton 
                    text="Taq"
                    className="m-2" 
                    disabled={false} 
                    dropDownOptions={{ width: 200 }}
                    items = {data.taq}
                />
                <DropDownButton 
                    className="m-2" 
                    disabled={true} 
                    text="Print"
                    dropDownOptions={{ width: 200 }}
                    items = {data.print}
                /> 
                <Button className="m-2" disabled={false} text="New Order" onClick={e=> setIsPopUpVisible(true)} />
                <DropDownButton className="m-2" disabled={true} items = {data.assignTo} dropDownOptions={{ width: 200 }} text="Assign To"/>
                <Button className="m-2" disabled={true} text="Hold"/>
                <DropDownButton className="m-2" disabled={true} text="Bulk Update"/>
                <DropDownButton className="m-2" text="Other Actions" items = {data.otherActions} dropDownOptions={{ width: 230 }}/>
            <br/>
            </div>
            <div className={'content-block'}>
            <DataGrid
                className={'dx-card wide-card '}
                dataSource={dataSource}
                showBorders={false}
                focusedRowEnabled={true}
                defaultFocusedRowIndex={0}
                columnAutoWidth={true}
                columnHidingEnabled={true}>
                <Paging defaultPageSize={5}/>
                <Pager showPageSizeSelector={true} showInfo={true}/>
                <FilterRow visible={true}/>
                <Export enabled={true} />
                <Selection mode="multiple" deferred={true} />
                <Column dataField={'Task_ID'} width={90} hidingPriority={2}/>
                <Column
                    dataField={'Task_Subject'}
                    width={190}
                    caption={'Subject'}
                    hidingPriority={8}/>
                <Column dataField={'Task_Status'} caption={'Status'} hidingPriority={6}/>
                <Column dataField={'Task_Priority'} caption={'Priority'} hidingPriority={5}>
                    <Lookup dataSource={priorities} valueExpr={'value'} displayExpr={'name'}/>
                </Column>
                <Column
                    dataField={'ResponsibleEmployee.Employee_Full_Name'}
                    caption={'Assigned To'}
                    allowSorting={false}
                    hidingPriority={7}/>
                <Column
                    dataField={'Task_Start_Date'}
                    caption={'Start Date'}
                    dataType={'date'}
                    hidingPriority={3}/>
                <Column
                    dataField={'Task_Due_Date'}
                    caption={'Due Date'}
                    dataType={'date'}
                    hidingPriority={4}/>
                <Column dataField={'Task_Priority'} caption={'Priority'} hidingPriority={1}/>
                <Column
                    dataField={'Task_Completion'}
                    caption={'Completion'}
                    hidingPriority={0}/>
            </DataGrid>
            </div>
             </React.Fragment>
    );
}

const dataSource = {
    store: {
        type: 'odata',
        key: 'Task_ID',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
    },
    expand: 'ResponsibleEmployee',
    select: [
        'Task_ID',
        'Task_Subject',
        'Task_Start_Date',
        'Task_Due_Date',
        'Task_Status',
        'Task_Priority',
        'Task_Completion',
        'ResponsibleEmployee/Employee_Full_Name'
    ]
};

const priorities = [
    {
        name: 'High',
        value: 4
    }, {
        name: 'Urgent',
        value: 3
    }, {
        name: 'Normal',
        value: 2
    }, {
        name: 'Low',
        value: 1
    }
];

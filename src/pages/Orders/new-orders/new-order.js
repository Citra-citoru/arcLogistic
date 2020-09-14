import React, {useState, useCallback, useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import 'devextreme-react/text-area';
import ScrollView from 'devextreme-react/scroll-view';
import {Button} from 'devextreme-react/button';
import CountryService from '../../../utils/country';
import StatesService from '../../../utils/states';
import CitiesService from '../../../utils/states';
import Form, {Item, ButtonItem, GroupItem} from 'devextreme-react/form';
import LoadIndicator from 'devextreme-react/load-indicator';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';

 export default function NewOrder() {
    const countries = new DataSource({
        store: {
            data: CountryService.map(item => item.name),
            type: 'array',
            key: 'ID'
        }
    });

    const states = new DataSource({
        store: {
            data: StatesService.map(item => item.name),
            type: 'array',
            key: 'ID'
        }
    });

    const cities = new DataSource({
        store: {
            data: CitiesService.map(item => item.name),
            type: 'array',
            key: 'ID'
        }
    });
    const btnCancel = {
        text: 'Cancel',
        type: 'inherit',
        useSubmitBehavior: false
    }

    const btnSave = {
        text: 'Save Orders',
        type: 'default',
        useSubmitBehavior: true
    }

   function onSubmit() {
        return true;
    }

    {/*useCallback(async (e) => {
        e.preventDefault();
        const { email, password } = formData.current;
        setLoading(true);

        const result = await createAccount(email, password);
        setLoading(false);

        if (result.isOk) {
          history.push('/login');
        } else {
          notify(result.message, 'error', 2000);
        }
      }, [history]);
    */
    }

    return (
        <React.Fragment>
            <ScrollView width='100%' height='100%'>
                <form onSubmit={onSubmit}>
                <Form
                    className={'create-account-form'}
                    id="form"
                    labelLocation={'top'}
                    //formData={formData.current}
                    //disabled={loading}
                    >
                    <GroupItem caption="Recipient Information" colSpan={2} colCount={3}>
                    <Item editorType={'dxTextBox'} dataField={'Name'}/>
                    <Item editorType={'dxTextBox'} dataField="Company"/>
                    <Item editorType={'dxTextBox'} dataField="Email"/>
                    <Item
                        dataField="Country"
                        editorType="dxSelectBox"
                        editorOptions={{
                        dataSource: countries,
                        searchEnabled: true,
                        value: ''
                    }}/>
                    <Item
                        dataField="State"
                        editorType="dxSelectBox"
                        editorOptions={{
                        dataSource: states,
                        searchEnabled: true,
                        value: ''
                    }}/>
                    <Item
                        dataField="City"
                        editorType="dxSelectBox"
                        editorOptions={{
                        dataSource: cities,
                        searchEnabled: true,
                        value: ''
                    }}/>
                    <Item editorType={'dxTextBox'} dataField="Address"/>
                    <Item editorType={'dxTextBox'} dataField="Postal Code"/>
                    <Item
                        editorType={'dxTextBox'}
                        dataField="Phone"
                        helpText="Example: +1(111)111-1111"/>
                    <Item
                        dataField="Paste US Address"
                        colSpan={3}
                        editorType="dxTextArea"
                        editorOptions={{
                        height: 90
                    }}/>
                    </GroupItem>
                    <GroupItem caption="Order Summary Information" colSpan={2} colCount={3}> 
                        <Item editorType={'dxTextBox'} dataField="Order #"></Item>
                        <Item editorType={'dxDateBox'} dataField="Order Date" />
                        <Item editorType={'dxDateBox'} dataField="Paid Date" />
                        <Item editorType={'dxTextBox'} dataField="Shipping Paid" />
                        <Item editorType={'dxTextBox'} dataField="tax Paid" />
                        <Item editorType={'dxTextBox'} dataField="Total Paid" />
                        
                    </GroupItem>
                    {/*} <ButtonItem horizontalAlignment="left" buttonOptions={btnCancel}/>
                     <ButtonItem horizontalAlignment="left" buttonOptions={btnSave}/> */}
                </Form>
                    <Button type="inherit" className="m-2" text='Cancel'/>
                    <Button type="default" text='Save Orders'/>
                </form>
            </ScrollView>
        </React.Fragment>
    );
}

import React, {Component} from 'react';
import DataTables from 'material-ui-datatables';

const TABLE_COLUMNS = [
  {
    key: 'waletname',
    label: 'Walet Name',
    sortable: true,
  }, {
    key: 'lastprice',
    label: 'Last Price',
    sortable: true,
  }, {
    key: 'bid',
    label: 'Bid',
  }, {
    key: 'ask',
    label: 'Ask',
  }, {
    key: 'open',
    label: 'Open',
  }, {
    key: 'high',
    label: '24 High',
  }, {
    key: 'low',
    label: '24 Low',
  }
];

const TABLE_DATA = [
  {
    waletname: 'sragy',
    lastprice: '159',
    bid: '6.0',
    ask: '24',
    open: '24',
    high: '24',
    low: '24',
  }, {
    waletname: 'abcd',
    lastprice: '159',
    bid: '6.0',
    ask: '24',
    open: '24',
    high: '24',
    low: '24',
  }, {
    waletname: 'abcd1',
    lastprice: '159',
    bid: '6.0',
    ask: '24',
    open: '24',
    high: '24',
    low: '24',
  }, {
    waletname: 'abcd2',
    lastprice: '159',
    bid: '6.0',
    ask: '24',
    open: '24',
    high: '24',
    low: '24',
  }
];

export default class MyComponent extends Component {

  handleFilterValueChange = (value) => {
    // your filter logic
  }

  handleSortOrderChange = (key, order) => {
    // your sort logic
  }

  render() {
    return (
      <DataTables
        height={'auto'}
        selectable={false}
        showRowHover={true}
        columns={TABLE_COLUMNS}
        data={TABLE_DATA}
        showCheckboxes={false}
        onCellClick={this.handleCellClick}
        onCellDoubleClick={this.handleCellDoubleClick}
        onFilterValueChange={this.handleFilterValueChange}
        onSortOrderChange={this.handleSortOrderChange}
        page={1}
        count={100}
      />
    );
  }
}

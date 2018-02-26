import React from 'react';
import Header from '../appbar/appbar';
import CurrencyGrid from '../currencygrid/currencygrid' 
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleTable from '../currenlylist/currencylist';
import Panel from 'muicss/lib/react/panel';

const App = ({ match: { params } }) => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>     
      <Header></Header>
      <CurrencyGrid></CurrencyGrid>
      <Panel>
       CURRENCY
      </Panel>
      <SimpleTable></SimpleTable>
    </MuiThemeProvider>
  )
}

export default App
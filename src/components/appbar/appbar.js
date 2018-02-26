import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import Create from 'material-ui/svg-icons/content/create';
import Home from 'material-ui/svg-icons/action/home';
import { withRouter } from 'react-router';

class Header extends Component {

    constructor(props){
      super(props);
      this.state = {open:false};
    }

    getChildContext() {
      return {muiTheme: getMuiTheme(baseTheme)};
    }

    handleToggle() {
      this.setState({open: !this.state.open});
    }
    
    handleClose(link) {       
        this.props.history.push(link);
        this.setState({open: false});
    } 

    render() {

        return (
            <div>
            <AppBar   title="Cripto Currency Listing" 
            onLeftIconButtonClick={this.handleToggle.bind(this)} />
                <Drawer
                  docked={false}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})} >
                  <MenuItem onClick={(event) =>this.handleClose('/userlist')} leftIcon={<PersonAdd />}>User Managment</MenuItem>
                  <MenuItem onClick={(event) =>this.handleClose('/booklist')} leftIcon={<ImportContacts />} >Book Managment</MenuItem>
                  <MenuItem onClick={(event) =>this.handleClose('/booklist')} leftIcon={<Create />} >Log</MenuItem>
                  <MenuItem onClick={(event) =>this.handleClose('/dashboard')} leftIcon={<Home />} >Home</MenuItem>
                </Drawer>
                
            </div> );
        }
    }

  
export default withRouter(Header);
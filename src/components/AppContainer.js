import React, { Component } from 'react';  
import { Switch, Route , Link} from 'react-router-dom'
import Login from "./Login/Login";
import DataList from './DataList/DataLists';
import CreateData from "./CreateData/CreateData";
import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AppBar from "./AppBar";
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
               <AppBar />
               <div className="container data-container m-t-header">
                 {this.props.children}
                </div>
            </div>
         );
    }
}
 
module.exports =  AppContainer;
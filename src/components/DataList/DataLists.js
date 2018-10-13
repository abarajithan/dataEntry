import React, {Component} from 'react';
import {connect} from 'react-redux';
import {roles} from "../../data/users";
import Button from '@material-ui/core/Button';
import { Link  } from "react-router-dom";
import { updateData, deleteData } from "../../actions/dataActions";
import Data from './Data';
import ExcelSheet from "./ExcelSheet";

class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            filter: "0,1"
        };
    }

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };
    updateData = (data) => {
        this.props.updateData(data);
    }
    deleteData = (data) => {
       this.props.deleteData(data);
    }

    viewMore = (data) => {
        console.log("ViewMore");
    }

    setFilter = filter => event => {
        this.setState({
            filter
        })
        this.handleClose();
    } 

    


    render() {
        const {datas, session} = this.props;
        const {anchorEl, filter} = this.state;
        const isAdmin = session.user.role === roles.ADMIN;
        return (
            <div>
                <div className="row m-bt-10">
                    <div className="col-6">
                        <h4>Data List</h4>
                    </div>
                    <div className="col-6 text-right">
                        {!isAdmin && <Link className="no-text-decoration" to="/create" style={{marginLeft: 10 }}><Button variant="contained" color="primary"> Add New</Button></Link>}
                        </div>
                </div>
                {!isAdmin && 
                    <ExcelSheet 
                        data={datas}
                        button={<Button variant="contained" color="primary">Download</Button>}
                    />
                }
                <div className="row">
                    {datas.map((data, index) => 
                    <div className="col-md-6 col-lg-4 m-bt-10" key={index}>
                        <Data data={data} 
                            isAdmin={isAdmin} 
                            updateData={this.updateData}
                            deleteData={this.deleteData}/>
                    </div>)}
                    {datas.length == 0 && <div className="col-12 no-data text-center">No Data. {filter != "0,1" && <div>Try changing filter selection</div>} </div>}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateData: (data) => dispatch(updateData(data)),
    deleteData: (data) => dispatch(deleteData(data)),
})
const mapStateToProps = state => ({datas: state.tasks.datas})
module.exports = connect(mapStateToProps,mapDispatchToProps)(DataList); 
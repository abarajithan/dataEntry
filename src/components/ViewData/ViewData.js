import React, { Component } from 'react';
import CellComponent from './CellComponent';
import { Link , withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateData } from "../../actions/dataActions";
import Header  from './Header';
import {roles} from "../../data/users";
import DoneIcon from "@material-ui/icons/DoneOutlineRounded"; 
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ViewData extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:{}
        };
        console.log(props);
    }

    componentDidMount(){
        const productId = this.props.match.params.productId;
        if(productId != null) {
            const datas = this.props.datas;
            const data = datas.filter(data => data.basic.productId == productId)[0]
            if(data){
                this.setState({
                    data
                })
            } else {
                console.log("redirect !!!")
            }
        } 
    }

    approveProduct = productId => event => {
        let data = this.state;
        data.data.isApproved = true;
        this.props.updateData(data);
        this.props.history.push("/");
    }

    rejectProduct = productId => event => {
        let data = this.state;
        data.data.isRejected = true;
        this.props.updateData(data);
        this.props.history.push("/");
    }
    

    render() {
        const {datas, session} = this.props;
        const {basic} = this.state.data;
        const isAdmin = session.user.role === roles.ADMIN;
        return (
            basic ?
            <Card>
                <CardContent>
                <div className='row'>
                    <div className="col-12">
                        <Header isRejected={this.state.data.isRejected} isApproved={this.state.data.isApproved} label="Basic Info" />
                    </div>
                    <div className="col-sm-6 col-xs-12 p-t-15">
                        <CellComponent
                            label={"Product Name"}
                            value={basic.productName}
                            />
                    </div>
                    <div className="col-sm-6 col-xs-12 p-t-15">
                        <CellComponent
                            label={"Product ID"}
                            value={basic.productIdType}
                            />
                    </div>
                    <div className="col-sm-6 col-xs-12 p-t-15">
                        <CellComponent
                            label={"Product ID Type"}
                            value={basic.productIdType}
                            />
                    </div>
                    <div className="col-sm-6 col-xs-12 p-t-15">
                        <CellComponent
                            label={"Product Identifiers"}
                            value={basic.productIdentifiers}
                            />
                    </div>
                    <div className="col-sm-6 col-xs-12 p-t-15">
                        <CellComponent
                            label={"Units Per Consumer Unit"}
                            value={basic.unitsPerConsumerUnit}
                            />
                    </div>
                    <div className="col-sm-6 col-xs-12 p-t-15">
                        <CellComponent
                            label={"Brand Name"}
                            value={basic.brand}
                            />
                    </div>
                    <div className="col-sm-6 col-xs-12 p-t-15">
                        <CellComponent
                            label={"Manufacturer"}
                            value={basic.manufacturer}
                            />
                    </div>
                    <div className="col-sm-6 col-xs-12 p-t-15">
                        <CellComponent
                            label={"Manufacturer Part Number"}
                            value={basic.manufacturerPartNumber}
                            />
                    </div>
                    <div className="col-sm-6 col-xs-12 p-t-15">
                        <CellComponent
                            label={"Key Features"}
                            value={basic.keyFeatures}
                            />
                    </div>
                    <div className="col-sm-6 col-xs-12 p-t-15">
                        <CellComponent
                            label={"Short Description"}
                            value={basic.shortDescription}
                            />
                    </div>
                    {
                        isAdmin && !this.state.data.isApproved &&
                        !this.state.data.isRejected &&
                        <div className="col-12 p-t-15 align-center">
                            <Button onClick={this.approveProduct(this.state.data)} variant="contained" color="primary" style={{marginRight: 10}}> { "Approve"}</Button>
                            <Button onClick={this.rejectProduct(this.state.data)} variant="contained" color="primary" style={{marginRight: 10}}> { "Reject"}</Button>
                            <Link className="no-text-decoration" to="/"><Button variant="outlined"> Cancel</Button></Link>
                        </div>
                    }
                    </div>
                </CardContent>
            </Card> 
            :
            <div />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateData: (data) => dispatch(updateData(data)),
  })
  const mapStateToProps = state => ({
      datas: state.tasks.datas
  })
module.exports =  withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewData));

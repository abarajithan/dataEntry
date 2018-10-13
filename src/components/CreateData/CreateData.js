import React, {Component} from 'react';
import { Link , withRouter } from "react-router-dom";

import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateData, addData } from "../../actions/dataActions";

class createData    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isApproved: false,
            isRejected: false,
            basic:{
                sku:"",
                productName: "",
                productIdType: "",
                productId:"",
                productIdentifiers:"",
                shortDescription:"",
                keyFeatures:"",
                unitsPerConsumerUnit:"",
                brand:"",
                manufacturer:"",
                manufacturerPartNumber:"",
                modelNumber:""
            }
        }
    }
    handleChange = (event) => {
        this.setState({
            basic: {
                ...this.state.basic,
                [event.target.name]: event.target.value
            }
        })
    }

    componentDidMount(){
        const productId = this.props.match.params.productId;
        if(productId != null) {
            const datas = this.props.datas;
            const data = datas.filter(data => data.id == productId)[0]

            if(data){
                this.setState({
                    data
                })
            } else {
                console.log("redirect !!!")
            }
        } 
    }

    handleSubmit = productId => event => {
        let data = this.state;
        if(productId == null) {
           this.props.addData(data);
        } else {
            this.props.updateData(data);
        }
        this.props.history.push("/");
    }

    render() {
         console.log("create edit", this.props)
        const {basic} = this.state;
        const productId = this.props.match.params.productId;

        return (
            <div className="row">
                <div className="col-sm-6 col-xs-12 p-t-10">
                    <TextField
                        id="name"
                        name="sku"
                        label="SKU"
                        value={basic.sku}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth/>
                </div>     
                <div className="col-sm-6 col-xs-12 p-t-10">
                    <TextField
                        id="name"
                        name="productName"
                        label="Product Name"
                        value={basic.productName}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth/>
                </div>   
                <div className="col-sm-6 col-xs-12 p-t-10">
                    <TextField
                        id="name"
                        name="productId"
                        label="Product Id"
                        value={basic.productId}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth/>
                </div>  
                <div className="col-sm-6 col-xs-12 p-t-10">
                    <TextField
                        id="name"
                        name="productIdType"
                        label="Product Id Type"
                        value={basic.productIdType}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth/>
                </div>  
                <div className="col-sm-6 col-xs-12 p-t-10">
                    <TextField
                        id="name"
                        name="productIdentifiers"
                        label="Product Identifiers"
                        value={basic.productIdentifiers}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth/>
                </div>  
                <div className="col-sm-6 col-xs-12 p-t-10">
                    <TextField
                        id="name"
                        name="unitsPerConsumerUnit"
                        label="Units Per Consumer Unit"
                        value={basic.unitsPerConsumerUnit}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth/>
                </div>  
                <div className="col-sm-6 col-xs-12 p-t-10">
                    <TextField
                        id="name"
                        name="brand"
                        label="Brand Name"
                        value={basic.brand}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth/>
                </div>  
                <div className="col-sm-6 col-xs-12 p-t-10">
                    <TextField
                        id="name"
                        name="manufacturer"
                        label="Manufacturer"
                        value={basic.manufacturer}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth/>
                </div>  
                <div className="col-sm-6 col-xs-12 p-t-10">
                    <TextField
                        id="name"
                        name="manufacturerPartNumber"
                        label="Manufacturer Part Number"
                        value={basic.manufacturerPartNumber}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth/>
                </div>  
                <div className="col-sm-6 col-xs-12 p-t-10">
                    <TextField
                        id="name"
                        name="modelNumber"
                        label="Model Number"
                        value={basic.modelNumber}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth/>
                </div>
                <div className="col-12 p-t-10">
                    <TextField
                        multiline={3}
                        id="name"
                        name="keyFeatures"
                        label="Key Features"
                        value={basic.keyFeatures}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth/>
                </div>  
                <div className="col-12 p-t-10">
                    <TextField
                        multiline={3}
                        id="name"
                        name="shortDescription"
                        label="Short Description"
                        value={basic.shortDescription}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth/>
                </div>  
                <div className="col-12">
                    <Button onClick={this.handleSubmit(productId)} variant="contained" color="primary" style={{marginRight: 10}}> { !!productId ? "Update" : "Add"}</Button>
                        <Link className="no-text-decoration" to="/"><Button variant="outlined"> Cancel</Button></Link>
                    </div>
                </div>

        );
    }
}
const mapDispatchToProps = dispatch => ({
  addData: (data) => dispatch(addData(data)),
  updateData: (data) => dispatch(updateData(data))
})
const mapStateToProps = state => ({
    datas: state.tasks.datas
})
module.exports =  withRouter(connect(mapStateToProps, mapDispatchToProps)(createData));
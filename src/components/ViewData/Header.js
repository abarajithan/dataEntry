import React, { Component } from 'react';
import DoneIcon from "@material-ui/icons/DoneOutlineRounded"; 
import CloseIcon  from "@material-ui/icons/CloseRounded";

class Header extends Component {
    render() {
        return (
            <div className="row header-row">
                <div className="col-12 product-sub-header">
                    {
                        this.props.isApproved &&
                        <DoneIcon className="p-r-30" />
                    }
                    {
                        this.props.isRejected &&
                        <CloseIcon className="p-r-30" />
                    }
                    {this.props.label}
                </div>
            </div>
        );
    }
}

export default Header;
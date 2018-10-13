import React, { Component } from 'react';

class CellComponent extends Component {
    render() {
        const props = this.props;
        return (
            <div className="row">
                <div className="col-12 cell-label"> 
                    {props.label}
                </div>
                <div className="col-12 cell-value"> 
                    {props.value}
                </div>
            </div>
        );
    }
}

export default CellComponent;
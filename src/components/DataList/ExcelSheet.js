import React, { Component } from 'react';
import Workbook from 'react-excel-workbook';

class ExcelSheet extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    getData = (obj,propertyName) =>{
        return obj.basic[propertyName];
    }
      render() {
          return (
            <div>
                <Workbook filename="Retailers Template.xlsx" element={this.props.button}>
                    <Workbook.Sheet data={this.props.data} name="Sheet A">
                        <Workbook.Column label="sku" value={(obj) => this.getData(obj,"sku")} />
                        <Workbook.Column label="Product Name" value={(obj) => this.getData(obj,"productName")} />
                        <Workbook.Column label="Product ID Type" value={(obj) => this.getData(obj,"productIdType")}/>
                        <Workbook.Column label="Product ID" value={(obj) => this.getData(obj,"productId")}/>
                        <Workbook.Column label="Short Desription" value={(obj) => this.getData(obj,"shortDesription")} />
                        <Workbook.Column label="Key Features" value={(obj) => this.getData(obj,"keyFeatures")} />
                        <Workbook.Column label="Units Per Consumer Unit" value={(obj) => this.getData(obj,"unitsPerConsumerUnit")} />
                        <Workbook.Column label="Brand Name" value={(obj) => this.getData(obj,"brand")} />
                        <Workbook.Column label="Manufacturer" value={(obj) => this.getData(obj,"manufacturer")} />
                        <Workbook.Column label="Manufacturer Part Number" value={(obj) => this.getData(obj,"manufacturerPartNumber")} />
                        <Workbook.Column label="Model Number" value={(obj) => this.getData(obj,"modelNumber")} />
                    </Workbook.Sheet>
                </Workbook>
            </div>
          );
      }
  }
  
module.exports = ExcelSheet;

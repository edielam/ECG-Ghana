import React, {Component} from "react";
import PageHeader from "../../components/PageHeader";

class DashboardPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "owner";
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <PageHeader headerText="ECG Meter Dashboard"/>
                <div className="w-75">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4">
                                <div className="dash-summary-cell">
                                    <p><b>Total Products</b></p>
                                    <p>1200</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="dash-summary-cell">
                                    <p><b>Total Delivered</b></p>
                                    <p>400</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="dash-summary-cell">
                                    <p><b>Pending Delivery</b></p>
                                    <p>800</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        ) 
    }
}

export default DashboardPage;
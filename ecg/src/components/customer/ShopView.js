import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../input/InputFormGroup";


class ShopView extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <h4>Meter Details</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <p><b>Meter Owner Information</b></p>
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="Md Nazmul Hasan" label="First Name" />
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="Hasan" label="Last Name" />
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="hasan08sust@gmail.com" label="Email" />
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="Active" label="Status" />
                                </div>


                                <div className="col-12 mt-3">
                                    <p><b>Meter Information</b></p>
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="AD99999999" label="Meter ID" />
                                    
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="25" label="Geolocation" />
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="########" label="QR-Code" />
                                </div>
                                <div className="col-6">
                                    <InputFormGroup inputClassName="form-control" labelClassName="mb-2" isReadOnly={true} value="Active" label="Status" />
                                </div>

                                <div className="col-12 mt-4">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-sm btn-warning" itemValue="Edit Meter" link="/app/shop/edit"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        ) 
    }
}

export default ShopView;
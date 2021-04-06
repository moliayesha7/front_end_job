import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { Component } from "react";
class Profile extends Component {
    state = {
        name: "",
        email: "",
        contact_address: "",
        phone_number: "",
        gender: "",
        acedamicQualification: '',
        passingYear: "",
        experience: "",



    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.setState({ checked: true });
    };
    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab>Personal Information</Tab>
                    <Tab>Education</Tab>
                    <Tab>Experience</Tab>
                </TabList>

                <TabPanel>
                    <div className="container">



                        <div className="col-sm-10 offset-sm-2">

                            <form className="form-horizontal">
                                <div className="form-group two-col">
                                    <label htmlFor="name" className="control-label col-sm-2 font-weight-bold "><span>Name</span></label>
                                    <div className="col-sm-4">
                                        <input type="text" id="name" className="form-control" placeholder="name" name="name" value="sumon" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="email" className="control-label col-sm-2 font-weight-bold ">Email</label>
                                    <div className="col-sm-4">
                                        <input type="text" id="email" className="form-control" placeholder="email" name="email"  value="sumon@gmail.com" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="contact_address" className="control-label col-sm-2 font-weight-bold ">Contact Address</label>
                                    <div className="col-sm-4">
                                        <input type="text" id="contact_address" className="form-control" placeholder="Enter Contact Address"  value="Uttor badda,Dhaka" name="contact_address" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="phone_number" className="control-label col-sm-2 font-weight-bold ">Phone Number</label>
                                    <div className="col-sm-4">
                                        <input type="text" id="phone_number" className="form-control" placeholder="Enter Phone Number" name="phone_number"  value="01812335678" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <br />

                                <br />
                                <div className="col-sm-4">
                                    <p className="font-weight-bold">Gender?</p>

                                    <div className="radio">
                                        <label ><input type="radio" id="gender" name="gender" value="1" onChange={this.handleChange} selected/>Femail</label>
                                    </div>
                                    <div className="radio">
                                        <label><input type="radio" id="gender" name="gender" value="0" onChange={this.handleChange} />Male</label>
                                    </div>

                                    <br />


                                    <br />
                                    <div className="col-sm-4">
                                    <br />

                                    <button type="submit" className="btn btn-primary">Edit</button>
                                </div>
                                  
                                </div>
                            </form>
                        </div>
                    </div>
                </TabPanel>


                <TabPanel>
                    <div className="container">



                        <div className="col-sm-10 offset-sm-2">

                            <form className="form-horizontal">
                                <div className="form-group two-col">
                                    <label htmlFor="acedamicQualification" className="control-label col-sm-2 font-weight-bold "><span>Last Acedamic Qualification</span></label>
                                    <div className="col-sm-4">
                                        <input type="text" id="acedamicQualification" className="form-control" placeholder="acedamicQualification"  value="Msc" name="acedamicQualification" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="passingYear" className="control-label col-sm-2 font-weight-bold ">Last Passing year</label>
                                    <div className="col-sm-4">
                                        <input type="text" id="passingYear" className="form-control" placeholder="passingYear" name="passingYear"  value="2013" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <br />


                                <br />
                                <div className="col-sm-4">
                                    <br />

                                    <button type="submit" className="btn btn-primary">Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </TabPanel>


                <TabPanel>
                    <div className="container">



                        <div className="col-sm-10 offset-sm-2">

                            <form className="form-horizontal">
                                <div className="form-group two-col">
                                    <label htmlFor="experience" className="control-label col-sm-2 font-weight-bold "><span>Year Of working experience</span></label>
                                    <div className="col-sm-4">
                                        <input type="text" id="experience" className="form-control" placeholder="experience" name="experience"  value="6" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <br />



                                <br />
                                <div className="col-sm-4">
                                    <br />

                                    <button type="submit" className="btn btn-primary">Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </TabPanel>

            </Tabs>
        )
    }
};
export default Profile
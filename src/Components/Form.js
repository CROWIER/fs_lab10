import React, { Component } from 'react'
import './CSS/style.css'



class Form extends Component {
    constructor(props) {

        super(props)

        this.state = {
            name: "",
            email: "",
            address: "",
            address2: "",
            city: "",
            province: "",
            postalcode: ""


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    namehandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    address2handler = (event) => {
        this.setState({
            address2: event.target.value
        })
    }
    cityhandler = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    provincehandler = (event) => {
        this.setState({
            province: event.target.value
        })
    }

    postalcodehandler = (event) => {
        this.setState({
            postalcode: event.target.value
        })
    }
    c = {
        name: "",
        email: "",
        address: "",
        address2: "",
        city: "",
        province: "",
        postalcode: ""


    };
    check=false
    handleSubmit = (event) => {
        this.check = true
        this.c = this.state
        console.log(this.state);


        this.setState({
            name: "",
            email: "",
            address: "",
            address2: "",
            city: "",
            province: "",
            postalcode: ""
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div class={"myform"}>

                <form onSubmit={this.handleSubmit}>
                    <h1>Data Entry Form</h1>
                    <label>Name :</label> <input type="text" value={this.state.name} onChange={this.namehandler} placeholder="Full Name..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Enter email..." /><br />
                    <label>Address :</label> <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="1234 Main street..." /><br />
                    <label>Address 2 :</label> <input type="text" value={this.state.address2} onChange={this.address2handler} placeholder="Apartment, Studio, Floor..." /><br />
                    <label>City :</label> <input type="text" value={this.state.city} onChange={this.cityhandler} /><br />
                    <label>Province :</label><select onChange={this.provincehandler} defaultValue="Select province">
                        <option defaultValue>Select province</option>
                        <option value="Alberta">Alberta</option>
                        <option value="BC">BC</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="NewBrunswick">New Brunswick</option>
                        <option value="NewFoundlnad">New Foundland and Labrador</option>
                        <option value="NovaScotia">Nova Scotia</option>
                        <option value="Ontario">Ontario</option>
                        <option value="PEI">Prince Edward Island</option>
                        <option value="Quebec">Quebec</option>
                </select><br />
                    <label>Postal Code :</label> <input type="text" value={this.state.postalcode} onChange={this.postalcodehandler} /><br />
                    <input type="submit" value="Submit" />
                </form>
                <h1>{this.check && <div class={"myform"}>
                    <table className="tg">
                        <thead>
                        <tr>
                            <th className="tg-0lax">Email:</th>
                            <th className="tg-0lax">{this.c.email}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="tg-0lax">Full Name:</td>
                            <td className="tg-0lax">{this.c.name}</td>
                        </tr>
                        <tr>
                            <td className="tg-0lax">Address:</td>
                            <td className="tg-0lax">{this.c.address2 + this.c.address}</td>
                        </tr>
                        <tr>
                            <td className="tg-0lax">City:</td>
                            <td className="tg-0lax">{this.c.city}</td>
                        </tr>
                        <tr>
                            <td className="tg-0lax">Province:</td>
                            <td className="tg-0lax">{this.c.province}</td>
                        </tr>
                        <tr>
                            <td className="tg-0lax">Postal Code:</td>
                            <td className="tg-0lax">{this.c.postalcode}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>}</h1>
            </div>
            
        )
    }
}

export default Form
